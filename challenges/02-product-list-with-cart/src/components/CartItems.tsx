import useCart from "../hooks/useCart";
import CartItem from "./CartItem";

function CartItems() {
  const { items } = useCart();
  return (
    <div className="grid grid-cols-1 gap-3">
      {items.length > 0 &&
        items.map((item, idx) => <CartItem key={idx} item={item} />)}
    </div>
  );
}

export default CartItems;
