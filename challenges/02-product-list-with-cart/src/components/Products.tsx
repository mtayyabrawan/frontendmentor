import Product from "./Product";
import productsData from "../lib/data";

function Products() {
  return (
    <div className="grid h-auto w-full grid-cols-3 gap-4 overflow-x-hidden overflow-y-auto pb-4">
      {productsData.map((product, idx) => (
        <Product key={idx} product={product} />
      ))}
    </div>
  );
}

export default Products;
