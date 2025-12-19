import Product from "./Product";
import productsData from "../lib/data";

function Products() {
  return (
    <div className="grid h-auto w-full grid-cols-1 gap-4 overflow-x-hidden md:grid-cols-3 md:gap-2 md:overflow-y-auto md:pb-4 lg:gap-4">
      {productsData.map((product, idx) => (
        <Product key={idx} product={product} />
      ))}
    </div>
  );
}

export default Products;
