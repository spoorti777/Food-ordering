const menuItems = [
    { id: 1, name: "Chicken Lollipop", category: "Starters", price: 180 },
    { id: 2, name: "Butter Chicken", category: "Mains", price: 260 },
    { id: 3, name: "Veg Kadai", category: "Mains", price: 160 },
    { id: 4, name: "Mango Milkshake", category: "Beverages", price: 70 },
  ];
  
  export default function Menu({ addToCart }) {
    return (
      <div className="p-4 grid grid-cols-2 gap-4">
        {menuItems.map(item => (
          <div key={item.id} className="border p-2 rounded shadow">
            <h3 className="font-bold">{item.name}</h3>
            <p>₹{item.price}</p>
            <button
              className="bg-blue-600 text-white px-2 py-1 mt-2 rounded"
              onClick={() => addToCart(item)}
            >
              Add
            </button>
          </div>
        ))}
      </div>
    );
  }

  