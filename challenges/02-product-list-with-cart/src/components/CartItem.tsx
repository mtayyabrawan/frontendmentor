import useCart from "../hooks/useCart";
import type { CartItm } from "../store/CartContext";

function CartItem({ item }: { item: CartItm }) {
  const { removeItem } = useCart();
  return (
    <div className="relative space-y-2 text-sm">
      <h3 className="font-medium">{item.name}</h3>
      <div className="flex items-center justify-start gap-3.5">
        <p className="text-danger font-medium">{item.quantity}x</p>
        <p className="text-rose-500">@ ${Number(item.price).toPrecision(3)}</p>
        <p className="text-rose-500 text-shadow-[0px_1px_1px_var(--color-rose-500)]">
          ${Number(item.totalPrice).toPrecision(3)}
        </p>
        <p
          className="group absolute top-[50%] left-[90%] -translate-y-1/2 cursor-pointer rounded-full border border-rose-500 p-0.5 hover:border-black"
          onClick={() => removeItem(item.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
            className="fill-rose-500 group-hover:fill-black"
          >
            <path d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z" />
          </svg>
        </p>
      </div>
    </div>
  );
}

export default CartItem;
