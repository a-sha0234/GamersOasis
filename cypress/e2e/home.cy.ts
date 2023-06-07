// describe("template spec", () => {
//   it("passes", () => {
//     cy.visit("http://localhost:3000");
//   });
// });

context("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("get h1 on page", () => {
    cy.get("h1").should("exist");
  });
  it("get the main header", () => {
    cy.get("h1").should("contain.text", "Game Store");
  });
});
