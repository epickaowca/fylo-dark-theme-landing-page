import { FC } from "react";
import { css, styled } from "styled-components";
import productiveIllustration from "../assets/illustration-stay-productive.png";
import arrowIcon from "../assets/icon-arrow.svg";

const ProductiveDiv = styled.div(({ theme }) => {
  return css`
    background-color: ${theme.darkBlue.mainBackground};
    padding-left: 25px;
    padding-bottom: 50px;
    padding-top: 140px;

    .container {
      display: flex;
      flex-direction: column;
      gap: 50px;
      max-width: 400px;
      margin: auto;
      img {
        width: 90%;
        margin: auto;
      }

      .description-container {
        display: flex;
        flex-direction: column;
        gap: 17px;
        align-items: flex-start;

        p {
          margin: 0;
        }

        h1 {
          margin-bottom: 10px;
          color: white;
          font-size: 1.3rem;
        }

        a {
          text-decoration: none;
          padding-bottom: 5px;
          border-bottom: 1px solid ${theme.lightGray};
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255, 255, 255, 0.7);

          img {
            width: 24px;
            height: 24px;
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      .container {
        flex-direction: row;
        align-items: center;
        max-width: 1300px;
        justify-content: center;
        img {
          width: 380px;
          margin: unset;
        }
        .description-container {
          max-width: 300px;
          h1 {
            font-size: 1.5rem;
          }

          p,
          a {
            font-size: 0.9rem;
          }
        }
      }
    }

    @media screen and (min-width: 1024px) {
      .container {
        img {
          width: 490px;
        }
        .description-container {
          max-width: 440px;
          h1 {
            font-size: 2.3rem;
          }

          p,
          a {
            font-size: 1rem;
          }
        }
      }
    }

    @media screen and (min-width: 1270px) {
      .container {
        gap: 70px;
        img {
          width: 560px;
        }
      }
    }
  `;
});

export const ProductiveSection: FC = () => {
  return (
    <ProductiveDiv>
      <div className="container">
        <img
          src={productiveIllustration}
          alt="stay productive - illustration"
        />
        <div className="description-container">
          <h1>Stay productive, wherever you are</h1>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for love collaboration. No email attachments required.
          </p>
          <a href="#">
            See how Fylo works
            <img src={arrowIcon} alt="arrow right - icon"></img>
          </a>
        </div>
      </div>
    </ProductiveDiv>
  );
};
