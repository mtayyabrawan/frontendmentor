import useCart from "../hooks/useCart";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

function Cart() {
  const { totalItems } = useCart();
  return (
    <div className="flex h-full w-full flex-col pb-8 md:w-136 md:pb-0">
      <h2 className="text-danger mb-5 text-xl font-bold">
        Your Cart <span>({totalItems})</span>
      </h2>
      {totalItems === 0 ? <EmptyCart /> : <FilledCart />}
    </div>
  );
}

export default Cart;
