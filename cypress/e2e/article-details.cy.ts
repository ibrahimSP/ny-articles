describe("Articles Home Page", () => {
  beforeEach(() => {
    // Visit the page that loads the articles
    cy.visit("/");

    // Check for the presence of article cards
    cy.get(".article-card").should("have.length.at.least", 1);

    // Navigate to ArticleDetails
    cy.get(".article-card").first().click();
    cy.url().should("match", /http:\/\/localhost:3000\/\d+/);
  });

  // Assertions specific to article details content
  it("displays the correct article details", () => {
    // Check for title
    cy.get(".article-title").first().should("not.be.empty");

    // Check for byline
    cy.get(".article-byline").first().should("not.be.empty");

    // Check for URL
    cy.get(".article-url").first().should("not.be.empty");
    cy.get(".article-url")
      .first()
      .invoke("attr", "href")
      .then((href) => {
        const expectedURLPattern = /^https:\/\/www\.nytimes\.com\//;
        expect(href).to.match(expectedURLPattern);
      });

    // Check for image
    cy.get(".article-details img").should(($img) => {
      const src = $img.attr("src");
      const expectedSrcPattern = /^https:\/\/static01\.nyt\.com\/images/;
      expect(src).to.match(expectedSrcPattern);
    });
  });

  // Check back button navigates correctly
  it("navigates back correctly when back button is clicked", () => {
    cy.get(".back-link").first().click();
    cy.url().should("match", /http:\/\/localhost:3000\//);
  });
});
