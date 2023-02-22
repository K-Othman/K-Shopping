import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ProductContextProivder } from "./context/ProductsContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProivder>
        <ShoppingCartProvider>
          <App />
        </ShoppingCartProvider>
      </ProductContextProivder>
    </BrowserRouter>
  </React.StrictMode>
);
