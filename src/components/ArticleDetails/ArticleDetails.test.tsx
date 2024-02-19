import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ArticleDetails from "./ArticleDetails";
import { MemoryRouter } from "react-router";

describe("ArticleDetails", () => {
  const mockProps = {
    title: "Test Title",
    abstract: "This is a test abstract.",
    mediaUrl: "https://example.com/test-image.jpg",
    section: "Test Section",
    byline: "By Test Author",
    published_date: "2023-01-01",
    url: "https://example.com/test-article",
  };

  it("renders correctly", () => {
    render(
      <MemoryRouter>
        <ArticleDetails {...mockProps} />
      </MemoryRouter>
    );

    // Check if the title is rendered
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check if the abstract is rendered
    expect(screen.getByText("Abstract:")).toBeInTheDocument();
    expect(screen.getByText(mockProps.abstract)).toBeInTheDocument();

    // Check if the section chip is rendered
    expect(screen.getByText(mockProps.section)).toBeInTheDocument();

    // Check if the byline is rendered
    expect(screen.getByText(mockProps.byline)).toBeInTheDocument();

    // Check if the published date is rendered
    expect(screen.getByText(mockProps.published_date)).toBeInTheDocument();

    // Check if the image is rendered with correct src
    const image = screen.getByRole("img", { name: mockProps.title });
    expect(image).toHaveAttribute("src", mockProps.mediaUrl);

    // Check if the link is rendered correctly
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", mockProps.url);
    expect(link).toHaveTextContent(mockProps.title);
  });
});
