function EmptyCart() {
  return (
    <>
      <img
        src="./images/illustration-empty-cart.svg"
        alt="Empty Cart"
        className="mx-auto mt-10 block"
      />
      <p className="mt-4 text-center text-sm text-rose-500 text-shadow-[0px_1px_1px_var(--color-rose-500)]">
        Your added items will appear here
      </p>
    </>
  );
}

export default EmptyCart;
