import styled from "styled-components";
import { SVG } from "../../assets/images";

export const Button = styled.button`
  padding: 14px 32px;

  cursor: pointer;
  border: 3px solid transparent;
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.color.accent};
  color: ${(p) => p.theme.color.white};

  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;

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

//=========Modal styles=======================================================

export const EllipseTop = styled(SVG.EllipseTop)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const EllipseBottom = styled(SVG.EllipseBottom)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Title = styled.h2`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xxl};
  line-height: 1.219;
  color: ${(p) => p.theme.color.accent};
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.bxl};
    line-height: 1.219;
  }
`;

export const Text = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 1.208;
  max-width: 425px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
    line-height: 1.208;
  }
`;

export const Cta = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;
  margin-bottom: 8px;
`;

export const Number = styled.a`
  text-decoration: none;
  color: ${(p) => p.theme.color.textMain};
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 1.25;
  transition: color ${(p) => p.theme.animation.main};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
    line-height: 1.208;
  }

  :hover,
  :focus {
    color: ${(p) => p.theme.color.accent};
  }
`;
