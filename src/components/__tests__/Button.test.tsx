import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button.test.tsx", () => {
  test("should render button component", () => {
    render(<Button></Button>);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
  });

  test("should render button component with text", () => {
    const text = "Hi";
    render(<Button>{text}</Button>);
    const buttonEl = screen.getByRole("button");
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl).toHaveTextContent(text);
  });
});
