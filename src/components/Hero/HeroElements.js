import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

// Variables récurrentes
const maxWidth = {
  sm: "540px",
  md: "720px",
  lg: "960px",
  xl: "1000px",
};

const colors = {
  white: "#f6f6f6",
  purple: "#cd5ff8",
};

// Keyframes
const ScrollAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

// Styled Components
export const HeroContainer = styled.div`
  padding: 4rem 1rem 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: ${maxWidth.sm};
  }
  @media (min-width: 768px) {
    max-width: ${maxWidth.md};
  }
  @media (min-width: 992px) {
    max-width: ${maxWidth.lg};
  }
  @media (min-width: 1200px) {
    max-width: ${maxWidth.xl};
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1;

  h1 {
    font-size: 3.5rem;
    color: ${colors.white};
    opacity: 0.98;
    font-weight: 400;
  }

  h5 {
    font-size: 1.6rem;
    color: ${colors.purple};
    margin-bottom: 2rem;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: ${colors.white};
    opacity: 0.85;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;

    h5 {
      min-height: 5rem;
    }
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`;

export const Image = styled.img`
  height: 300px;
  width: auto;
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;

  animation: ${ScrollAnimation} 2s linear 0s infinite;

  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: ${colors.purple};

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
    color: ${colors.purple};
  }
`;
