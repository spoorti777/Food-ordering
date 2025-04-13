import { useState } from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  const checkout = () => {
    alert("Redirecting to payment...");
    // Optional: Trigger Razorpay
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold text-center py-4">Oasis Restaurant</h1>
      <Menu addToCart={addToCart} />
      <Cart cartItems={cart} checkout={checkout} />
    </div>
  );
}
const checkout = () => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const options = {
    key: "rzp_test_YourKeyHere",
    amount: total * 100,
    currency: "INR",
    name: "Oasis Restaurant",
    description: "Food Order",
    handler: function (response) {
      alert("Payment ID: " + response.razorpay_payment_id);
    },
    prefill: {
      name: "Customer",
      email: "email@example.com",
    },
    theme: {
      color: "#3399cc",
    },
  };
  const rzp = new window.Razorpay(options);
  rzp.open();
};

