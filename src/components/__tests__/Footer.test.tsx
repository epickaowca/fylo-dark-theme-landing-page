import { Footer } from "../Footer";
import { render } from "@testing-library/react";
import { myTheme } from "../../globalStyles";
import { ThemeProvider } from "styled-components";

describe("Footer.test.tsx", () => {
  it("Should render a footer", () => {
    const { container } = render(
      <ThemeProvider theme={myTheme}>
        <Footer />
      </ThemeProvider>
    );

    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });
});
