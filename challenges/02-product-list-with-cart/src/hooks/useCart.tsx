import { useContext } from "react";
import CartContext from "../store/CartContext";

function useCart() {
  return useContext(CartContext);
}

export default useCart;
