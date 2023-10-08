import styled, { css } from "styled-components";

const ButtonStyled = styled.button(
  ({ theme }) => css`
    border-color: ${theme.blue};
  `
);

export default function Button() {
  return <ButtonStyled>Hi</ButtonStyled>;
}
