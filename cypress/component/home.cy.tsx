import Home from "../../src/pages/home/Home";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../../src/redux/store";
import { BrowserRouter } from "react-router-dom";
/// <reference types="cypress" />

describe("home.cy.tsx", () => {
  it("playground", () => {
    cy.mount(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
  });
});
