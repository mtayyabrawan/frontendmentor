import useCart from "../hooks/useCart";

function AddToCart({ id }: { id: string }) {
  const { addItem } = useCart();
  return (
    <button
      className="hover:border-danger focus:border-danger hover:text-danger focus:text-danger absolute top-[93%] left-[50%] flex -translate-x-[50%] cursor-pointer gap-2 rounded-3xl border border-rose-500 bg-white px-4 py-2 text-sm font-medium focus-visible:outline-hidden"
      onClick={() => addItem(id)}
    >
      <img src="./images/icon-add-to-cart.svg" alt="Add to Cart" />
      <span className="text-nowrap">Add to Cart</span>
    </button>
  );
}

export default AddToCart;
