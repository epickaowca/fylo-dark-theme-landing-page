import { FC } from "react";
import { styled, css } from "styled-components";
import logo from "../assets/logo.svg";
import locationIcon from "../assets/icon-location.svg";
import phoneIcon from "../assets/icon-phone.svg";
import emailIcon from "../assets/icon-email.svg";
import facebookIcon from "../assets/facebook-svgrepo-com.svg";
import twitterIcon from "../assets/twitter-svgrepo-com.svg";

const FooterStyled = styled.footer(({ theme }) => {
  return css`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: ${theme.darkBlue.footerBackground};
    .container {
      max-width: 400px;
      font-size: 0.9rem;
      line-height: 1.2rem;
      padding: 25px;
      display: flex;
      flex-direction: column;
      margin: auto;

      gap: 70px;
      .left-side {
        display: flex;
        flex-direction: column;
        gap: 25px;

        .imgContainer {
          width: 20px;
          height: 100%;
        }
        .logoContainer {
          img {
            margin-bottom: 35px;
          }

          span {
            display: flex;
            align-items: flex-start;
            gap: 25px;

            p {
              margin: 0;
              max-width: 290px;
            }
          }
        }
        .contacts {
          display: flex;
          flex-direction: column;
          gap: 25px;
          span {
            display: flex;
            align-items: center;
            gap: 25px;
            p {
              margin: 0;
            }
          }
        }
      }

      .right-side {
        display: flex;
        flex-direction: column;
        gap: 25px;
        ul {
          padding: 0;
          margin: 0;
          list-style-type: none;
          li {
            margin-bottom: 7px;
            a {
              color: ${theme.lightGray};
              text-decoration: none;
            }
          }
        }

        .iconsContainer {
          display: flex;
          justify-content: center;
          gap: 15px;
          .icon {
            width: 30px;
            height: 30px;
          }
        }
      }
    }

    @media screen and (min-width: 768px) {
      .container {
        font-size: 1rem;
        flex-direction: row;
        justify-content: center;
        margin: 0;
        max-width: unset;

        .right-side {
          flex-direction: row;
          flex-wrap: wrap;
          max-width: 200px;
          gap: 45px;
        }
      }
    }

    @media screen and (min-width: 1024px) {
      .container {
        .right-side {
          max-width: unset;
        }

        .left-side {
          flex-direction: row;
          .contacts {
            /* justify-content: flex-end; */
          }
        }
      }
    }

    @media screen and (min-width: 1300px) {
      .container {
        gap: 150px;
        .right-side {
          gap: 70px;
        }

        .left-side {
          gap: 100px;
          .contacts {
            justify-content: flex-end;
          }
        }
      }
    }
  `;
});

export const Footer: FC = () => {
  return (
    <FooterStyled>
      <div className="container">
        <div className="left-side">
          <div className="logoContainer">
            <img src={logo} alt="logo" />
            <span>
              <div className="imgContainer">
                <img src={locationIcon} alt="location icon" />
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
                esse porro deleniti nobis, perspiciatis pariatur et possimus
                veritatis repellendus.
              </p>
            </span>
          </div>
          <div className="contacts">
            <span className="phone">
              <div className="imgContainer">
                <img src={phoneIcon} alt="phone icon" />
              </div>
              <p>+1-543-123-4567</p>
            </span>
            <span className="email">
              <div className="imgContainer">
                <img src={emailIcon} alt="email icon" />
              </div>
              <p>example@fylo.com</p>
            </span>
          </div>
        </div>
        <div className="right-side">
          <div>
            <ul>
              <li>
                <a href="#aboutUs">About Us</a>
              </li>
              <li>
                <a href="#jobs">Jobs</a>
              </li>
              <li>
                <a href="#press">Press</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="#ContactUs">Contact Us</a>
              </li>
              <li>
                <a href="#terms">Terms</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="iconsContainer">
            <img className="icon" src={facebookIcon} alt="facebook icon" />
            <img className="icon" src={twitterIcon} alt="twitter icon" />
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};
