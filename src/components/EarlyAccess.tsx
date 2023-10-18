import { FC } from "react";
import { Button } from "./Button";
import { css, styled } from "styled-components";

const Container = styled.div(({ theme }) => {
  return css`
    max-width: 400px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: ${theme.darkBlue.testimonialsBackground};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 90%;

    > .container {
      color: white;
      padding: 20px;
      text-align: center;
      h1 {
        font-size: 1.2rem;
      }
      p {
        margin-top: 20px;
        margin-bottom: 40px;
        font-size: 0.9rem;
        line-height: 1.2rem;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 30px;

        input {
          padding: 17px 25px 17px 25px;
          border: none;
          border-radius: 50px;
        }
        button {
          width: 100%;
        }
      }
    }

    @media screen and (min-width: 768px) {
      max-width: 1200px;
      > .container {
        padding: 50px 20px 50px 20px;
        max-width: 1020px;
        margin: auto;

        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.4rem;
          margin-top: 30px;
          margin-bottom: 50px;
        }
        form {
          flex-direction: row;

          input {
            width: 70%;
          }
          button {
            width: 240px;
          }
        }
      }
    }
  `;
});

export const EarlyAccess: FC = () => {
  return (
    <Container>
      <div className="container">
        <h1>Get early access today</h1>
        <p>
          it only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form action="#">
          <input type="text" placeholder="email@example.com" />
          <Button>Get Started For Free</Button>
        </form>
      </div>
    </Container>
  );
};
