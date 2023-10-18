import { FeedbackItem } from "../FeedbackSection";
import { screen, render } from "@testing-library/react";
import profile1 from "../../assets/profile-1.jpg";
import { ThemeProvider } from "styled-components";
import { myTheme } from "../../globalStyles";

describe("FeedbackSection.test.tsx", () => {
  it("Should render an opinion", () => {
    render(component);
    const opinionEl = screen.getByText(data.opinion);
    expect(opinionEl).toBeInTheDocument();
  });

  it("Should render an person", () => {
    render(component);
    const personName = screen.getByText(data.person.name);
    const personTitle = screen.getByText(data.person.title);
    expect(personName).toBeInTheDocument();
    expect(personTitle).toBeInTheDocument();
  });

  it("Should render an avatar", () => {
    render(component);
    const avatar = screen.getByAltText("avatar icon");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute("src", profile1);
  });

  it("Should render an quotes", () => {
    render(
      <ThemeProvider theme={myTheme}>
        <FeedbackItem
          imgSrc={data.imgSrc}
          opinion={data.opinion}
          person={data.person}
          withQuotes={true}
        />
      </ThemeProvider>
    );
    const quotes = screen.getByAltText("quotes background image");
    expect(quotes).toBeInTheDocument();
  });
});

const data = {
  opinion:
    "Fylo has improved our team productivity by an order of magnitude. SInce making the switch our team has become a well-oiled collaboration machine",
  person: { name: "Statish Patel", title: "Founder & CEO, Huddle" },
  imgSrc: profile1,
  withQuotes: true,
};

const component = (
  <ThemeProvider theme={myTheme}>
    <FeedbackItem
      imgSrc={data.imgSrc}
      opinion={data.opinion}
      person={data.person}
    />
  </ThemeProvider>
);
