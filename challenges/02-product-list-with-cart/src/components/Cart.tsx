import useCart from "../hooks/useCart";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

function Cart() {
  const { totalItems } = useCart();
  return (
    <div className="flex h-full w-136 flex-col">
      <h2 className="text-danger mb-5 text-xl font-bold">
        Your Cart <span>({totalItems})</span>
      </h2>
      {totalItems === 0 ? <EmptyCart /> : <FilledCart />}
    </div>
  );
}

export default Cart;
