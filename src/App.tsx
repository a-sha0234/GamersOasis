import React from "react";
import Home from "./pages/Home";

import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        {" "}
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
