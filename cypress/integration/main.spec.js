// describe("GetIdeas", () => {
//   beforeEach(() => {
//     cy.viewport(375, 667);
//     cy.visit("http://localhost:3000/");
//   });

//   describe("Search", () => {
//     // it("shows the correct ", () => {
//     //   cy.contains("type");
//     // });
//   });
// });

describe("Meal Planner", () => {
  beforeEach(() => {
    cy.viewport(375, 667);
    cy.visit("http://localhost:3000/planner");
    cy.location("pathname").should("include", "planner");
    cy.reload();
  });

  it("shows the correct header title", () => {
    cy.get('[data-cy="header-title"]').should("contain", "Meal Planner");
  });

  it("clicks the link 'type'", () => {
    cy.contains("type").click();
  });
});

describe("Grocery List", () => {
  beforeEach(() => {
    //cy.viewport(375, 667);
    cy.visit("http://localhost:3000/grocery");
    cy.location("pathname").should("include", "grocery");
    //cy.reload();
  });
});
