describe("GetIdeas", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  describe("Search", () => {
    // it("shows the correct ", () => {
    //   cy.contains("type");
    // });
  });
});

describe("Meal Planner", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/planner");
  });

  describe("Meal Planner", () => {
    it("shows the correct header title", () => {
      cy.get('[data-cy="header-title"]').should("contain", "Meal Planner");
    });
  });

  it("navigates to open recipe page on click", () => {
    cy.get('[data-cy="image-group"]').click();
    cy.location("pathname").should("include", "recipe");
  });
});
