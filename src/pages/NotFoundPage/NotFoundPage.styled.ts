import { Link } from "react-router-dom";
import styled from "styled-components";
import { SVG } from "../../assets/images";

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${(p) => p.theme.fontWeight.boldxl};
  font-size: 125px;
  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: 200px;
  }
`;

export const Logo = styled(SVG.Logo)`
  width: 110px;
  fill: ${(p) => p.theme.color.accent};

  @media screen and (min-width: 768px) {
    width: 150px;
  }
`;

export const Text = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;
  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 14px 32px;
  max-width: 225px;

  cursor: pointer;
  border: 3px solid transparent;
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.color.accent};
  color: ${(p) => p.theme.color.white};

  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;
  text-decoration: none;

  transition: background-color ${(p) => p.theme.animation.main},
    transform ${(p) => p.theme.animation.main},
    border-color ${(p) => p.theme.animation.main};

  :hover {
    background-color: ${(p) => p.theme.color.white};
    border: 3px solid;
    border-color: ${(p) => p.theme.color.accent};
    color: ${(p) => p.theme.color.accent};
  }

  :active {
    transform: scale(0.99);
  }

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
