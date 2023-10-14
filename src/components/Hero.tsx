import { styled, css } from "styled-components";
import { headerHeight, headerHeightDesktop } from "./Header";
import illustrationIntro from "../assets/illustration-intro.png";
import { Button } from "./Button";
import bgCurvyDesktop from "../assets/bg-curvy-desktop.svg";
import bgCurvyMobile from "../assets/bg-curvy-mobile.svg";

const HeroStyled = styled.div(({ theme }) => {
  return css`
    min-height: calc(100vh - ${headerHeight});

    .container {
      padding: 15px;
      margin: auto;
      display: flex;
      gap: 25px;
      flex-direction: column;
      color: white;
      align-items: center;
      max-width: 350px;

      img {
        width: 90%;
        margin-bottom: 35px;
      }

      h1,
      p {
        color: inherit;
        text-align: center;
        margin: 0;
      }

      h1 {
        font-size: 1.4rem;
        line-height: 1.9rem;
      }

      p {
        color: ${theme.lightGray};
      }
    }

    .background {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 70%;
      overflow: hidden;
      z-index: -1;

      img {
        width: 100%;
      }

      div {
        transform: translateY(-7px);
        width: 100%;
        background-color: ${theme.darkBlue.mainBackground};
        height: 100%;
      }
    }

    @media (min-width: 768px) {
      min-height: calc(100vh - ${headerHeightDesktop});
    }
  `;
});

export function Hero() {
  return (
    <HeroStyled>
      <div className="container">
        <img src={illustrationIntro} alt="illustration Intro"></img>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers
        </p>
        <Button>Get Started</Button>
      </div>
      <div className="background">
        <picture>
          <source media="(max-width: 768px)" srcSet={bgCurvyMobile} />
          <img src={bgCurvyDesktop} alt="bg curvy mobile" />
        </picture>
        <div></div>
      </div>
    </HeroStyled>
  );
}
