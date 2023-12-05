import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Assurez-vous d'importer votre composant principal correctement
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,

  document.getElementById("root")
);
