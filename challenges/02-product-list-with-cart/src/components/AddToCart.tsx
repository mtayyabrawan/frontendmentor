import useCart from "../hooks/useCart";

function AddToCart({ id }: { id: string }) {
  const { addItem, getItem } = useCart();
  const item = getItem(id);
  return (
    <button
      className={`hover:border-danger focus:border-danger absolute top-[93%] left-1/2 flex -translate-x-1/2 cursor-pointer items-center justify-center rounded-3xl py-2 text-sm font-medium focus-visible:outline-hidden ${!item ? "hover:text-danger focus:text-danger gap-2 border border-rose-500 bg-white px-7 text-black" : "bg-danger gap-8 px-4 text-white"}`}
      onClick={() => {
        if (!item) {
          addItem(id);
        }
      }}
    >
      {!item ? (
        <>
          <img src="./images/icon-add-to-cart.svg" alt="Add to Cart" />
          <span className="text-nowrap">Add to Cart</span>
        </>
      ) : (
        <>
          <Decrement id={id} />
          <span>{item.quantity}</span>
          <Increment id={id} />
        </>
      )}
    </button>
  );
}

function Increment({ id }: { id: string }) {
  const { incrementItem } = useCart();
  return (
    <span
      className="group rounded-full border border-white p-0.75 hover:bg-white"
      onClick={() => incrementItem(id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10"
        className="group-hover:fill-danger size-2.75 fill-white"
      >
        <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
      </svg>
    </span>
  );
}

function Decrement({ id }: { id: string }) {
  const { decrementItem } = useCart();
  return (
    <span
      className="group rounded-full border border-white p-0.75 hover:bg-white"
      onClick={() => decrementItem(id)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="2"
        fill="none"
        viewBox="0 0 10 2"
        className="group-hover:fill-danger size-2.75 fill-white"
      >
        <path d="M0 .375h10v1.25H0V.375Z" />
      </svg>
    </span>
  );
}

export default AddToCart;
