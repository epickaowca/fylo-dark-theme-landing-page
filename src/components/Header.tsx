import { FC } from "react";
import styled, { css } from "styled-components";
import logo from "../assets/logo.svg";
import { firstLetterLowerCase } from "../utils";

export const headerHeight = "80px";
export const headerHeightDesktop = "90px";

const HeaderStyled = styled.header(
  ({ theme }) => css`
    border-color: ${theme.blue};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px;
    height: ${headerHeight};
    nav ul {
      display: flex;
      gap: 15px;
    }

    img {
      width: 25%;
      max-width: 130px;
    }

    @media (min-width: 768px) {
      height: ${headerHeightDesktop};
      nav ul {
        gap: 45px;
      }
    }
  `
);

export const Header: FC = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <NavItem itemName={"Features"} />
          <NavItem itemName={"Team"} />
          <NavItem itemName={"Sign In"} />
        </ul>
      </nav>
    </HeaderStyled>
  );
};

const Li = styled.li(({ theme }) => {
  return css`
    list-style-type: none;
    a {
      color: ${theme.lightGray};
      text-decoration: none;
      white-space: nowrap;
      font-family: ${theme.fontFamilyRaleway};
      font-size: 0.9rem;
      @media (min-width: 768px) {
        font-size: 1rem;
      }
    }
  `;
});

const NavItem: FC<{ itemName: string }> = ({ itemName }) => {
  const itemWithoutSpace = itemName.replace(" ", "");
  return (
    <Li>
      <a href={`#${firstLetterLowerCase(itemWithoutSpace)}`}>{itemName}</a>
    </Li>
  );
};
