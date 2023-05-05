import { Link, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useEffect, useState } from "react";
import { handleSideBar } from "../../redux/cartSidebar";
import { useDispatch } from "react-redux";
import styles from "./navbar.module.css";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart";
import { FiGithub } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

export default function Navbar() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchBar, setSearchBar] = useState<boolean>(false);
  const [gameStore, setGameStore] = useState<boolean>(false);

  useEffect(() => {
    switch (location.pathname) {
      case "./":
        setGameStore(false);
        setSearchBar(false);
        break;

      case "/store":
        setSearchBar(true);
        setGameStore(true);
        break;
      default:
        setGameStore(false);
        setSearchBar(false);
    }
  }, [location]);

  function sideBar() {
    dispatch(handleSideBar());
  }

  return (
    <nav>
      <ul className={styles.navbar}>
        {gameStore && (
          <Link to="/">
            <li>Game Store</li>
          </Link>
        )}
        <Link to="/store">
          <li>Browse Store</li>
        </Link>
        {searchBar && (
          <li>
            <SearchBar />
          </li>
        )}
        <li>
          <a href="#">
            <FiGithub />
            a-sha0234
          </a>
        </li>
        <li>
          <button onClick={sideBar}>
            <BsCart2 />
            {`Cart ${useSelector(selectCart).length}`}
          </button>
        </li>
      </ul>
    </nav>
  );
}
