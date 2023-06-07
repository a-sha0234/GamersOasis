import React from "react";
import Navbar from "../../src/components/navbar/Navbar";
import { Provider } from "react-redux";
import { store } from "../../src/redux/store";
import { BrowserRouter } from "react-router-dom";
import cartSidebar from "../../src/redux/cartSidebar";
import CartSidebar from "../../src/components/cartSidebar/CartSidebar";

describe("navbar component", () => {
  it("playground", () => {
    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
  });
});
