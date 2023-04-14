import { Link, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [searchBar, setSearchBar] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setSearchBar(false);
    }

    if (location.pathname === "/store") {
      setSearchBar(true);
    }
  }, [location]);

  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Game Store</li>
        </Link>
        <Link to="/store">
          <li>Browse Store</li>
        </Link>
        {searchBar && (
          <li>
            <SearchBar />
          </li>
        )}
        <li>
          <button>Cart</button>
        </li>
      </ul>
    </nav>
  );
}
