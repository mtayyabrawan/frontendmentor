import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <CartProvider>
      <main className="max-w-8xl mx-auto flex h-screen min-h-screen w-full min-w-sm gap-16 bg-white px-20 pt-16">
        <ProductSection />
        <Cart />
      </main>
    </CartProvider>
  );
}

export default App;
