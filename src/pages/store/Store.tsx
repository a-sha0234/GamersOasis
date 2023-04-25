import Sidebar from "../../components/sidebar/Sidebar";
import GameGrid from "../../components/gameGrid/GameGrid";
import { useSelector } from "react-redux";
import { selectSidebar } from "../../redux/cartSidebar";
import CartSidebar from "../../components/cartSidebar/CartSidebar";

export default function Store() {
  return (
    <div>
      <h1>Trending</h1>
      <Sidebar />
      <GameGrid />
    </div>
  );
}
