import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ArticleCard from "./ArticleCard";
import { MemoryRouter } from "react-router";

describe("ArticleCard", () => {
  it("renders correctly with given article details", () => {
    render(
      <MemoryRouter>
        <ArticleCard
          id={1}
          title={"A title"}
          abstract={"Some description"}
          mediaUrl={"/default.png"}
          section={"Context"}
        />
      </MemoryRouter>
    );

    // Check if the title is rendered
    expect(screen.getByText("A title")).toBeInTheDocument();

    // Check if the abstract is rendered
    expect(screen.getByText("Some description")).toBeInTheDocument();

    // Check if the section chip is rendered
    expect(screen.getByText("Context")).toBeInTheDocument();

    // Check if the image is rendered with correct src
    const image = screen.getByRole("img", { name: "A title" });

    expect(image).toHaveStyle("background-image: url(/default.png);");
  });

  it("renders default image as a fallback", () => {
    render(
      <MemoryRouter>
        <ArticleCard
          id={1}
          title={"A title"}
          abstract={"Some description"}
          mediaUrl={""}
          section={"Context"}
        />
      </MemoryRouter>
    );

    // Check if the image is rendered with correct src
    const image = screen.getByRole("img", { name: "A title" });

    expect(image).toHaveStyle("background-image: url(/default.png);");
  });
});
