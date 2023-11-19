describe("Hospital", () => {
  it("should play and pause video", () => {
    cy.visit("/");
    cy.get("video").should("exist");
    cy.get("video").should("have.prop", "paused", false);
    cy.wait(5000);
    cy.get("button").last().click();
    cy.get("video").should("have.prop", "paused", true);
  });
  it("should have at least 3 hospitals", () => {
    cy.visit("/");
    cy.get("button").first().should("be.visible");
    cy.get("button").first().click();
    cy.wait(5000);
    cy.get("img").should("have.length.at.least", 3);
  });
});
