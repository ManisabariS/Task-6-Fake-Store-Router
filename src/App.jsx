import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCart);
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
