import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/store">
          <li>Browse Store</li>
        </Link>
        <Link to="/store">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
}
