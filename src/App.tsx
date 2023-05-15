import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Store from "./pages/store/Store";
import GamePage from "./pages/gamePage/GamePage";
import CartSidebar from "./components/cartSidebar/CartSidebar";
import { useSelector } from "react-redux";
import { selectSidebar } from "../src/redux/cartSidebar";
import "../src/style/global.css";

function App() {
  const isSidebar = useSelector(selectSidebar);

  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        {/* <Navbar />{" "} */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/store/:id" element={<GamePage />}></Route>
        </Routes>
      </BrowserRouter>
      {isSidebar && <CartSidebar />}
    </div>
  );
}

export default App;
