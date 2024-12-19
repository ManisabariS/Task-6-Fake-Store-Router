import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductList from "../components/ProductList";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Home;
