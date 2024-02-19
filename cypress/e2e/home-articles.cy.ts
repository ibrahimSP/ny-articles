describe("Articles Home Page", () => {
  beforeEach(() => {
    // Visit the page that loads the articles
    cy.visit("/");
  });

  it("successfully loads and displays articles", () => {
    // Check for header
    cy.contains("NY Times Most Popular Articles").should("exist");

    // Check for the presence of article cards
    cy.get(".article-card").should("have.length.at.least", 1);

    // Check for title
    cy.get(".article-title").first().should("not.be.empty");

    // Check for abstract
    cy.get(".article-abstract").first().should("not.be.empty");

    // Check for image
    cy.get(".MuiCardMedia-root").should(($el) => {
      const style = $el.css("background-image");
      const baseUrlPattern = "https://static01.nyt.com/images";

      // Assert that the background-image CSS property contains the base URL
      expect(style).to.include(baseUrlPattern);
    });

    // Test ArticleCard click
    cy.get(".article-card").first().click();
    cy.url().should("match", /http:\/\/localhost:3000\/\d+/);
  });
});
