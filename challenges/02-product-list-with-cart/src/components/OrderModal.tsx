/* eslint-disable react-hooks/exhaustive-deps */
import OrderTotal from "./OrderTotal";
import useCart from "../hooks/useCart";
import OrderItem from "./OrderItem";
import { useEffect, useRef } from "react";

function OrderModal({
  toggleModal,
  modal,
}: {
  toggleModal: () => void;
  modal: boolean;
}) {
  const { items, resetCart } = useCart();

  function confirmOrder() {
    resetCart();
    toggleModal();
  }

  function clickOutside(evt: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(evt.target as Node)) {
      toggleModal();
    }
  }

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modal) {
      document.addEventListener("mousedown", clickOutside);
    } else {
      document.removeEventListener("mousedown", clickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [modal]);

  return (
    <div className="fixed inset-0 z-50 h-full w-full bg-black/30">
      <div className="max-w-8xl relative mx-auto h-full w-full min-w-xs">
        <div
          className="absolute bottom-0 left-0 h-130 w-full rounded-t-lg bg-white p-6 md:bottom-auto md:left-1/2 md:mt-10 md:w-[65%] md:-translate-x-1/2 md:rounded-lg lg:w-[45%] xl:w-1/3"
          ref={modalRef}
        >
          <div className="h-[22%]">
            <img
              src="./images/icon-order-confirmed.svg"
              alt="Order confirmed"
              className="size-10"
            />
            <h2 className="text-2xl font-bold text-nowrap">Order Confirmed</h2>
            <p className="text-nowrap text-rose-500">
              We hope you enjoy your food!
            </p>
          </div>
          <div className="h-[68%] space-y-2 rounded-lg bg-rose-50 p-6">
            <div className="h-[90%] divide-y divide-rose-100 overflow-x-hidden overflow-y-auto">
              {items.map((item, idx) => (
                <OrderItem key={idx} item={item} />
              ))}
            </div>
            <OrderTotal />
          </div>
          <button
            className="bg-danger hover:bg-danger-dark block h-[10%] w-full cursor-pointer rounded-3xl p-2 text-rose-50 focus-visible:outline-hidden"
            onClick={confirmOrder}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderModal;
