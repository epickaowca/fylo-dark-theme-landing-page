import { FC } from "react";
import { css, styled } from "styled-components";
import profile1 from "../assets/profile-1.jpg";
import profile2 from "../assets/profile-2.jpg";
import profile3 from "../assets/profile-3.jpg";
import quotes from "../assets/bg-quotes.png";

const Feedback = styled.div(({ theme }) => {
  return css`
    background-color: ${theme.darkBlue.mainBackground};
    padding: 60px 0 80px 0;

    .container {
      margin: auto;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 25px;
    }

    @media screen and (min-width: 768px) {
      padding: 170px 0 170px 0;
      .container {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }
    }
  `;
});

export const FeedbackSection: FC = () => {
  return (
    <Feedback>
      <div className="container">
        {data.map(
          ({ imgSrc, opinion, person: { name, title }, withQuotes }) => {
            const person = { name, title };
            return (
              <FeedbackItem
                imgSrc={imgSrc}
                opinion={opinion}
                person={person}
                withQuotes={withQuotes}
              />
            );
          }
        )}
      </div>
    </Feedback>
  );
};

const Item = styled.div(
  ({
    theme: {
      darkBlue: { testimonialsBackground },
    },
  }) => {
    return css`
      z-index: 1;
      box-shadow: 0px 0px 15px ${testimonialsBackground};
      .quotes {
        position: absolute;
        top: -37px;
        left: -7px;
        z-index: -1;
      }

      .container {
        max-width: 355px;
        background-color: ${testimonialsBackground};
        padding: 25px 20px 25px 20px;
        border-radius: 5px;

        position: relative;

        .opinion {
          font-size: 0.95rem;
          line-height: 1.5rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .avatar {
          margin-top: 30px;
          display: flex;
          gap: 15px;
          img {
            width: 35px;
            height: 35px;
            border-radius: 50%;
          }

          .credentials {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 5px;

            h6 {
              color: white;
              margin: 0;
              font-size: 0.95rem;
              letter-spacing: 2px;
            }

            p {
              font-size: 0.75rem;
              margin: 0;
            }
          }
        }
      }
    `;
  }
);

type FeedbackItemProps = {
  opinion: string;
  person: { name: string; title: string };
  imgSrc: string;
  withQuotes?: boolean;
};

const FeedbackItem: FC<FeedbackItemProps> = ({
  opinion,
  person: { name, title },
  imgSrc,
  withQuotes,
}) => {
  return (
    <Item>
      <div className="container">
        {withQuotes && (
          <img
            className="quotes"
            src={quotes}
            alt="quotes background image"
          ></img>
        )}
        <p className="opinion">{opinion}</p>
        <div className="avatar">
          <img src={imgSrc} alt="avatar icon" />
          <div className="credentials">
            <h6>{name}</h6>
            <p>{title}</p>
          </div>
        </div>
      </div>
    </Item>
  );
};

const data: FeedbackItemProps[] = [
  {
    opinion:
      "Fylo has improved our team productivity by an order of magnitude. SInce making the switch our team has become a well-oiled collaboration machine",
    person: { name: "Statish Patel", title: "Founder & CEO, Huddle" },
    imgSrc: profile1,
    withQuotes: true,
  },
  {
    opinion:
      "Fylo has improved our team productivity by an order of magnitude. SInce making the switch our team has become a well-oiled collaboration machine",
    person: { name: "Bruce McKenzie", title: "Founder & CEO, Huddle" },
    imgSrc: profile2,
  },
  {
    opinion:
      "Fylo has improved our team productivity by an order of magnitude. SInce making the switch our team has become a well-oiled collaboration machine",
    person: { name: "Iva Boyd", title: "Founder & CEO, Huddle" },
    imgSrc: profile3,
  },
];
