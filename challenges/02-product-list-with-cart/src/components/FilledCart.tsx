import { useState } from "react";
import CartItems from "./CartItems";
import DeliveryInfo from "./DeliveryInfo";
import OrderModal from "./OrderModal";
import OrderTotal from "./OrderTotal";

function FilledCart() {
  const [modal, setModal] = useState<boolean>(false);
  function toggleModal() {
    setModal((prevModal) => !prevModal);
  }
  return (
    <div className="flex grow flex-col gap-8 overflow-x-hidden overflow-y-auto pb-2 text-sm">
      {modal && <OrderModal toggleModal={toggleModal} modal />}
      <CartItems />
      <OrderTotal />
      <DeliveryInfo />
      <button
        className="bg-danger hover:bg-danger-dark block w-full cursor-pointer rounded-3xl p-2 text-rose-50 focus-visible:outline-hidden"
        onClick={toggleModal}
      >
        Confirm Order
      </button>
    </div>
  );
}

export default FilledCart;
