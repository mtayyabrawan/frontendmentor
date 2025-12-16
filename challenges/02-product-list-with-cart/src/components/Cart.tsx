import FilledCart from "./FilledCart";

function Cart() {
  return (
    <div className="flex h-full w-136 flex-col">
      <h2 className="text-danger mb-5 text-xl font-bold">
        Your Cart <span>({0})</span>
      </h2>
      <FilledCart />
    </div>
  );
}

export default Cart;
