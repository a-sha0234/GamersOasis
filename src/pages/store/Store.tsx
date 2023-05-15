import Sidebar from "../../components/sidebar/Sidebar";
import GameGrid from "../../components/gameGrid/GameGrid";
import { useSelector } from "react-redux";
import { selectSidebar } from "../../redux/cartSidebar";
import CartSidebar from "../../components/cartSidebar/CartSidebar";
import styles from "./store.module.css";
import Navbar from "../../components/navbar/Navbar";

export default function Store() {
  return (
    <main className={styles.container}>
      <Navbar />
      <h1>Trending</h1>
      <Sidebar />
      <GameGrid />
    </main>
  );
}
