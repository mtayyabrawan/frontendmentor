import { createContext } from "react";

export type CartItm = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

export type CartState = {
  items: CartItm[];
  totalItems: number;
  totalPrice: number;
};

type CartCtx = CartState & {
  fetchCart: () => void;
  addItem: (itemId: string) => void;
  removeItem: (itemId: string) => void;
  incrementItem: (itemId: string) => void;
  decrementItem: (itemId: string) => void;
  resetCart: () => void;
};

const CartContext = createContext<CartCtx>({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  fetchCart: () => {},
  addItem: () => {},
  removeItem: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  resetCart: () => {},
});

export default CartContext;
