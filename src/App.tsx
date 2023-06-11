import { Route, Routes } from "react-router-dom";
import CartItems from "./components/cartItems/CartItems";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import Product from "./pages/product/Product";
import SignUp from "./pages/signUp/SignUp";
import Store from "./pages/store/Store";
import Checkout from "./pages/checkout/Checkout";
import Protected from "./components/protected/Protected";
import Footer from "./components/footer/Footer";
import ContactUs from "./pages/contactUs/ContactUs";

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
