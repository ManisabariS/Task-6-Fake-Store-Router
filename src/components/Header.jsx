import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-customPurple text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Fake Store</h1>
      <nav>
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/cart" className="mx-2">
          Cart
        </Link>
      </nav>
    </header>
  );
}

export default Header;
