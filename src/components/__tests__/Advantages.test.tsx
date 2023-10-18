import { render, screen } from "@testing-library/react";
import { AdvantageItem } from "../Advantages";
import { ReactComponent as accessAnywhereIcon } from "../../assets/icon-access-anywhere.svg";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../globalStyles";

describe("Advantages.test.tsx", () => {
  it("Should render an h3 element", () => {
    render(component);
    const h3 = screen.getByRole("heading", { level: 3 });
    expect(h3).toBeInTheDocument();
    expect(h3).toHaveTextContent(data.h3);
  });

  it("Should render an img element", () => {
    render(component);
    const imgEl = screen.getByRole("img");
    expect(imgEl).toBeInTheDocument();
    expect(imgEl).toHaveAttribute("src", data.img.src);
    expect(imgEl).toHaveAttribute("alt", data.img.alt);
  });

  it("Should render an paragraph element", () => {
    render(component);
    const p = screen.getByText(data.p);
    expect(p).toBeInTheDocument();
  });
});

const data = {
  img: {
    src: accessAnywhereIcon,
    alt: "access anywhere icon",
  },
  h3: "Access your file, anywhere",
  p: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
};

const component = (
  <ThemeProvider theme={myTheme}>
    <AdvantageItem h3={data.h3} img={data.img} p={data.p} />
  </ThemeProvider>
);
