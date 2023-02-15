import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import { Product } from "./pages/Product";
import SignUp from "./pages/SignUp";
import Store from "./pages/Store";

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
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignUp />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
