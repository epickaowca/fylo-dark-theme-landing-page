import { FC } from "react";
import { styled, css } from "styled-components";
import accessAnywhereIcon from "../assets/icon-access-anywhere.svg";
import securityIcon from "../assets/icon-security.svg";
import collaborationIcon from "../assets/icon-collaboration.svg";
import anyFileIcon from "../assets/icon-any-file.svg";

const AdvantagesStyled = styled.div(({ theme }) => {
  return css`
    background-color: ${theme.darkBlue.mainBackground};
    padding: 40px 0 40px 0;

    .container {
      display: flex;
      flex-wrap: wrap;
      max-width: 350px;
      margin: auto;
      gap: 70px;
      justify-content: center;

      @media (min-width: 768px) {
        max-width: 840px;
        gap: 20px;
        row-gap: 100px;
        justify-content: space-between;
      }
    }
  `;
});

export const Advantages: FC = () => {
  return (
    <AdvantagesStyled>
      <div className="container">
        {itemsData.map(({ img: { alt, src }, h3, p }) => {
          const img = { alt, src };
          return <AdvantageItem img={img} h3={h3} p={p} key={p} />;
        })}
      </div>
    </AdvantagesStyled>
  );
};

const AdvantageItemStyled = styled.div`
  width: 90%;
  max-width: 340px;
  text-align: center;
  color: white;

  img {
    margin-bottom: 20px;
  }
`;

type AdvantageItemProps = {
  img: { src: string; alt: string };
  h3: string;
  p: string;
};

const AdvantageItem: FC<AdvantageItemProps> = ({
  img: { src, alt },
  h3,
  p,
}) => {
  return (
    <AdvantageItemStyled>
      <img src={src} alt={alt} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </AdvantageItemStyled>
  );
};

const itemsData = [
  {
    img: {
      src: accessAnywhereIcon,
      alt: "access anywhere icon",
    },
    h3: "Access your file, anywhere",
    p: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    img: {
      src: securityIcon,
      alt: "security icon",
    },
    h3: "Security you can trust",
    p: "2-factor authentication and user controlled encryption are jus a couple of the security features we allow to help secure your files.",
  },
  {
    img: {
      src: collaborationIcon,
      alt: "collaboration icon",
    },
    h3: "Real-time collaboration",
    p: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    img: {
      src: anyFileIcon,
      alt: "any file icon",
    },
    h3: "Store any type of file",
    p: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];
