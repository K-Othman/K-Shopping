import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";
import { ProductsContext } from "../context/ProductsContext";
import { UserAuth } from "../context/AuthContext";

interface FormData {
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
}

function Checkout() {
  const { cartItems } = useContext(CartContext);
  const { user } = UserAuth();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });
  const { products } = useContext(ProductsContext);

  const total = cartItems.reduce((total, item) => {
    const product = products.find((p) => p.id === item.id);
    return total + (product?.price || 0) * item.quantity;
  }, 0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Perform checkout logic here
    // You can access form data via formData state
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
    });
  };

  return (
    <div className="container mx-auto pt-10 pb-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">Checkout</h1>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border-gray-300 border rounded-md py-2 px-3 w-full"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border-gray-300 border rounded-md py-2 px-3 w-full"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block font-medium mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="border-gray-300 border rounded-md py-2 px-3 w-full"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block font-medium mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="border-gray-300 border rounded-md py-2 px-3 w-full"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="postalCode"
                    className="block font-medium mb-1"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    className="border-gray-300 border rounded-md py-2 px-3 w-full"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="bg-gray-100 rounded-lg p-6">
              {cartItems.map((item) => {
                const product = products.find((p) => p.id === item.id);
                if (!product) return null;
                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between mb-4"
                  >
                    <div>
                      <p className="font-medium">{product.title}</p>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                    </div>
                    <p>£{(product.price * item.quantity).toFixed(2)}</p>
                  </div>
                );
              })}
              <hr className="border-t border-gray-300 my-4" />
              <div className="flex items-center justify-between">
                <p className="font-medium">Total:</p>
                <p className="font-bold">£{total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Your shopping cart is empty.</p>
      )}
    </div>
  );
}

export default Checkout;
