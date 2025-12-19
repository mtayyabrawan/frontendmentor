import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart";
import ProductSection from "./components/ProductSection";

function App() {
  return (
    <CartProvider>
      <main className="max-w-8xl mx-auto flex h-screen min-h-screen w-full min-w-xs flex-col gap-8 bg-white px-4 pt-6 md:flex-row md:gap-16 md:px-20 md:pt-16">
        <ProductSection />
        <Cart />
      </main>
    </CartProvider>
  );
}

export default App;
