import { useState, type ReactNode } from "react";
import CartContext, { type CartState } from "./CartContext";
import productsData from "../lib/data";

function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartState>(() => {
    let localCart = localStorage.getItem("plwc_cart");
    if (localCart === null) return { items: [], totalPrice: 0, totalItems: 0 };
    localCart = JSON.parse(localCart as string);
    if (
      typeof localCart === "object" &&
      localCart !== null &&
      "items" in localCart &&
      "totalItems" in localCart &&
      "totalPrice" in localCart
    ) {
      return localCart;
    } else {
      return { items: [], totalPrice: 0, totalItems: 0 };
    }
  });

  function resetCart() {
    const initialCart = { items: [], totalPrice: 0, totalItems: 0 };
    localStorage.setItem("plwc_cart", JSON.stringify(initialCart));
    setCart(initialCart);
  }

  function storeCart(cartState: CartState) {
    setCart(cartState);
    localStorage.setItem("plwc_cart", JSON.stringify(cartState));
  }

  function fetchCart() {
    let localCart = localStorage.getItem("plwc_cart");
    if (localCart === null) resetCart();
    localCart = JSON.parse(localCart as string);
    if (
      typeof localCart === "object" &&
      localCart !== null &&
      "items" in localCart &&
      "totalItems" in localCart &&
      "totalPrice" in localCart
    ) {
      setCart(localCart);
    } else {
      resetCart();
    }
  }

  function addItem(itemId: string) {
    const item = productsData.find((product) => product.id === itemId);
    if (!item) return;
    const existingItem = cart.items.find((itm) => itm.id === itemId);
    if (existingItem) {
      incrementItem(itemId);
      return;
    }
    const cartState = {
      items: [
        ...cart.items,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          totalPrice: item.price,
        },
      ],
      totalItems: cart.totalItems + 1,
      totalPrice: cart.totalPrice + item.price,
    };
    storeCart(cartState);
  }

  function removeItem(itemId: string) {
    const item = cart.items.find((item) => item.id === itemId);
    if (!item) return;
    const cartState = {
      items: cart.items.filter((item) => item.id !== itemId),
      totalItems: cart.totalItems - item.quantity,
      totalPrice: cart.totalPrice - item.totalPrice,
    };
    storeCart(cartState);
  }

  function incrementItem(itemId: string) {
    const item = cart.items.find((item) => item.id === itemId);
    if (!item) return;
    const cartState = {
      items: cart.items.map((item) => {
        return item.id !== itemId
          ? item
          : {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: item.totalPrice + item.price,
            };
      }),
      totalItems: cart.totalItems + 1,
      totalPrice: cart.totalPrice + item.price,
    };
    storeCart(cartState);
  }

  function decrementItem(itemId: string) {
    const item = cart.items.find((item) => item.id === itemId);
    if (!item) return;
    const cartState = {
      items: cart.items.map((item) => {
        return item.id !== itemId
          ? item
          : {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: item.totalPrice - item.price,
            };
      }),
      totalItems: cart.totalItems - 1,
      totalPrice: cart.totalPrice - item.price,
    };
    storeCart(cartState);
  }

  return (
    <CartContext.Provider
      value={{
        ...cart,
        fetchCart,
        resetCart,
        addItem,
        removeItem,
        incrementItem,
        decrementItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
