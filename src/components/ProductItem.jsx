import PropTypes from "prop-types";

function ProductItem({ product, addToCart }) {
  // Format price in INR
  const formattedPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(product.price);

  return (
    <div className="border p-4 flex flex-col justify-between h-full">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p>{product.description.substring(0, 60)}...</p>
      <p className="text-green-600 font-bold">{formattedPrice}</p>
      <div className="mt-auto">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white py-1 px-4 mt-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductItem;
