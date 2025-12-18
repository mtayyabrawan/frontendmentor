import useCart from "../hooks/useCart";

function OrderTotal() {
  const { totalPrice } = useCart();
  return (
    <p className="flex items-center justify-between">
      <span>Order Total</span>
      <span className="text-lg font-bold">
        ${Number(totalPrice).toPrecision(3)}
      </span>
    </p>
  );
}

export default OrderTotal;
