export default function Cart({ cartItems, checkout }) {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    return (
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">Cart</h2>
        {cartItems.map((item, index) => (
          <p key={index}>{item.name} - ₹{item.price}</p>
        ))}
        <p className="mt-2 font-semibold">Total: ₹{total}</p>
        <button
          className="bg-green-600 text-white px-4 py-2 mt-2 rounded"
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    );
  }
  