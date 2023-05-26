import { Route, Routes } from "react-router-dom";
import CartItems from "./components/CartItems";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";
import Checkout from "./pages/Checkout";
import Protected from "./components/Protected";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-[#F8F9FA]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:category" element={<Store />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/carts" element={<CartItems />} />
          <Route
            path="/checkout"
            element={
              <Protected>
                <Checkout />
              </Protected>
            }
          />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
