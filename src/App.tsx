import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import CartItems from "./components/CartItems";
import Navbar from "./components/Navbar";
import { CartContext } from "./context/ShoppingCartContext";
import About from "./pages/About";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";

function App() {
  // bring the context here and pass the cartItem id to the CartItems compmnent so you can use the id
  // const { cartItems } = useContext(CartContext);
  // console.log(cartItems, "CART");
  // cartItems.map((item) => {
  //   <CartItems key={item.id} {...item} />;
  // });

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
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/carts" element={<CartItems />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
