import type { CartItm } from "../store/CartContext";

function OrderItem({ item }: { item: CartItm }) {
  return (
    <div className="relative flex gap-2 p-2">
      <img
        src={"." + item.thumbnail}
        alt={item.name}
        className="size-14 rounded-md"
      />
      <div className="space-y-2 text-sm">
        <h3 className="font-medium">{item.name}</h3>
        <p className="space-x-4">
          <span className="text-danger font-medium">{item.quantity}x</span>
          <span className="text-rose-500">
            @ ${Number(item.price).toPrecision(3)}
          </span>
        </p>
      </div>
      <p className="absolute top-1/2 right-0 -translate-y-1/2 font-medium text-black">
        ${Number(item.totalPrice).toPrecision(3)}
      </p>
    </div>
  );
}

export default OrderItem;
