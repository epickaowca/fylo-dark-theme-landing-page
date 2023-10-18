import { FC, ReactNode } from "react";
import { styled, css } from "styled-components";

const ButtonStyled = styled.button(({ theme }) => {
  return css`
    width: 240px;
    padding: 15px 0 15px 0;
    font-weight: bolder;
    color: white;
    font-family: ${theme.fontFamilyRaleway};
    background-image: linear-gradient(
      to right,
      ${theme.blue} 1%,
      ${theme.cyan} 99%
    );
    border: none;
    border-radius: 40px;
    font-size: 1rem;
    cursor: pointer;
  `;
});

export const Button: FC<{ children?: ReactNode }> = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};
