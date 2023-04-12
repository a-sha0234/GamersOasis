import React from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Navbar />{" "}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/store"></Route>

          <Route path="/store/:id"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
