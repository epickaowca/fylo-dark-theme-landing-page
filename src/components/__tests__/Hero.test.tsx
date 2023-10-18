import { Hero } from "../Hero";
import { render, screen } from "@testing-library/react";
import { myTheme } from "../../globalStyles";
import { ThemeProvider } from "styled-components";

describe("Hero.test.tsx", () => {
  it("Should render a hero img", () => {
    render(
      <ThemeProvider theme={myTheme}>
        <Hero />
      </ThemeProvider>
    );
    const heroImg = screen.getByAltText("illustration Intro");
    expect(heroImg).toBeInTheDocument();
  });
});
