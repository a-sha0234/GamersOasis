import { Link, useLocation } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useEffect, useState } from "react";
import { handleSideBar } from "../../redux/cartSidebar";
import { useDispatch } from "react-redux";
import styles from "./navbar.module.css";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart";
import { FiGithub } from "react-icons/fi";
import { BsBag, BsFillBagFill } from "react-icons/bs";
import { BsController, BsCart3 } from "react-icons/bs";
import { motion } from "framer-motion";

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
        <div className={styles.left}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            <li className={styles.gameStore}>
              {gameStore && (
                <Link to="/" style={{ color: "white" }}>
                  <BsController />
                  Game Store
                </Link>
              )}
            </li>
          </motion.div>

          <li className={styles.browseStore}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              {!gameStore && (
                <Link to="/store" style={{ color: "white" }}>
                  {" "}
                  <BsCart3 /> Browse Store
                </Link>
              )}
            </motion.div>
          </li>
          <li className={styles.SearchBar}>{searchBar && <SearchBar />}</li>
        </div>
        <div className={styles.right}>
          {" "}
          <li className={styles.githubLink}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <a href="https://github.com/a-sha0234" style={{ color: "white" }}>
                <FiGithub />
                a-sha0234
              </a>
            </motion.div>
          </li>{" "}
          <li>
            <motion.div
              whileHover={{ scale: 1.02 }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
            >
              <button onClick={sideBar} className="Cart">
                {useSelector(selectCart).length ? (
                  <BsFillBagFill color="limegreen" />
                ) : (
                  <BsBag />
                )}
                {`Cart ${useSelector(selectCart).length}`}
              </button>
            </motion.div>
          </li>
        </div>
      </ul>
    </nav>
  );
}
