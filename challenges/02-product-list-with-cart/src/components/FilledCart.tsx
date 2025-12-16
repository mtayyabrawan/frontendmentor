import CartItems from "./CartItems";
import DeliveryInfo from "./DeliveryInfo";

function FilledCart() {
  return (
    <div className="flex grow flex-col gap-8 overflow-x-hidden overflow-y-auto pb-2 text-sm">
      <CartItems />
      <p className="flex items-center justify-between">
        <span>Order Total</span>
        <span className="text-lg font-bold">$5.50</span>
      </p>
      <DeliveryInfo />
      <button className="bg-danger hover:bg-danger-dark block w-full cursor-pointer rounded-3xl p-2 text-rose-50 focus-visible:outline-hidden">
        Confirm Order
      </button>
    </div>
  );
}

export default FilledCart;
