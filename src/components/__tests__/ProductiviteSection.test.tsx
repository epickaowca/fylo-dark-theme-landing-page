import { ProductiveSection } from "../ProductiveSection";
import { render, screen } from "@testing-library/react";
import { myTheme } from "../../globalStyles";
import { ThemeProvider } from "styled-components";

describe("ProductiveSection.test.tsx", () => {
  it("Should render a img", () => {
    render(
      <ThemeProvider theme={myTheme}>
        <ProductiveSection />
      </ThemeProvider>
    );
    const productiveImg = screen.getByAltText("stay productive - illustration");
    expect(productiveImg).toBeInTheDocument();
  });
});
