/// <reference types="cypress" />

// use command npx cypress open to

describe("first test function", () => {
  beforeEach(() => {
    cy.visit("https://callisto.stage.roado.co.in/login");
  });
  it("test1", () => {
    const a = 3 + 3;
    if (a < 6) {
      throw new Error("the result is less than 6");
    }
  });
});

describe("visiting a website", () => {
  it("check if we are in the login page", () => {
    cy.contains("Login").should("exist");
    cy.contains("s");
    cy.get("div#__next").should("exist");
    cy.contains("Solutions").click();
  });
  it("visit Roado marketing website", () => {
    cy.visit("https://callisto.stage.roado.co.in/login");
  });
});

// to run this without a browser for CI and CD i.e. continuous integration and continuous deployment employment

// use command npx cypress run --headless
