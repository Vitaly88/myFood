describe("GetIdeas", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("/");
  });

  describe("Search", () => {
    it("shows the correct ", () => {
      cy.contains("type").click();
    });
  });
});

describe("Meal Planner", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("/planner");
    cy.location("pathname").should("include", "planner");
    cy.reload();
  });

  it("shows the correct header title", () => {
    cy.get('[data-cy="header-title"]').should("contain", "Meal Planner");
  });
});

describe("Grocery List", () => {
  beforeEach(() => {
    //cy.viewport(375, 667);
    cy.visit("/grocery");
    cy.location("pathname").should("include", "grocery");
    //cy.reload();
  });
  it("shows the correct header title", () => {
    cy.get('[data-cy="header-title"]').should("contain", "Grocery List");
  });
});
