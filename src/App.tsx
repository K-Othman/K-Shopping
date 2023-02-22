import { Route, Routes } from "react-router-dom";
import CartItems from "./components/CartItems";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";
// import {firebaseConfig} from "./firebase"
// import { initializeApp } from "firebase/app";

// initializeApp(.firebaseConfig)

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
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/carts" element={<CartItems />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
