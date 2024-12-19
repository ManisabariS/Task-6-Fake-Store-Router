import PropTypes from "prop-types";

function CartPage({ cartItems, removeFromCart, updateQuantity }) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discountedTotal = total * 0.9;

  // Format price in INR
  const formatPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 mb-2">
              <h3>{item.title}</h3>
              <p>Price: {formatPrice(item.price)}</p>
              <p>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                  className="border ml-2 p-1 w-16"
                />
              </p>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-500 text-white py-1 px-4 mt-2"
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <div className="font-bold">
            <p>Total: {formatPrice(total)}</p>
            <p>Discounted Total (10% off): {formatPrice(discountedTotal)}</p>
          </div>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

CartPage.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
};

export default CartPage;
