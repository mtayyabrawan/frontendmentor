import type { ProductData } from "../lib/data";
import AddToCart from "./AddToCart";

function Product({ product }: { product: ProductData }) {
  return (
    <div className="h-full w-full space-y-1.5">
      <div className="relative mb-8">
        <img
          src={"." + product.image.desktop}
          alt={product.name}
          className="rounded-lg"
        />
        <AddToCart />
      </div>
      <span className="block text-sm text-rose-500">{product.category}</span>
      <h3 className="font-medium">{product.name}</h3>
      <p className="text-danger font-medium tracking-tight">
        ${Number(product.price).toPrecision(3)}
      </p>
    </div>
  );
}

export default Product;
