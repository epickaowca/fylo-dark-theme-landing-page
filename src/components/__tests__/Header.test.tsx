import { Header } from "../Header";
import { render, screen } from "@testing-library/react";
import { myTheme } from "../../globalStyles";
import { ThemeProvider } from "styled-components";

describe("Header.test.tsx", () => {
  it("Should render a header", () => {
    const { container } = render(
      <ThemeProvider theme={myTheme}>
        <Header />
      </ThemeProvider>
    );
    const header = container.querySelector("header");
    const nav = screen.getByRole("navigation");
    expect(header).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });
});
