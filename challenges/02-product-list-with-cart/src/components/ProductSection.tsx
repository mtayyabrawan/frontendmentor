import Products from "./Products";

function ProductSection() {
  return (
    <div className="flex grow flex-col">
      <h1 className="mb-5 text-2xl font-bold">Desserts</h1>
      <Products />
    </div>
  );
}

export default ProductSection;
