import { Link, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useEffect, useState } from "react";
import { handleSideBar } from "../../redux/cartSidebar";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
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

  function sideBar() {
    dispatch(handleSideBar());
  }

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
          <button onClick={sideBar}>Cart</button>
        </li>
      </ul>
    </nav>
  );
}
