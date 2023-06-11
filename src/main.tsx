import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import "./index.css";
import { ProductContextProvider } from "./context/productsContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <ShoppingCartProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </ShoppingCartProvider>
      </ProductContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
