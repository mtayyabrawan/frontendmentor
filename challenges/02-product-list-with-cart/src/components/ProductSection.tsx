import Products from "./Products";

function ProductSection() {
  return (
    <div className="md:flex md:grow md:flex-col">
      <h1 className="mb-5 text-2xl font-bold">Desserts</h1>
      <Products />
    </div>
  );
}

export default ProductSection;
