import styled from "styled-components";
import { SVG } from "../../assets/images";

export const Modal = styled.dialog`
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 32px;
  padding-right: 32px;
  border: 3px solid ${(p) => p.theme.color.accent};
  border-radius: ${(p) => p.theme.radii.large};
  text-align: center;
  background-color: ${(p) => p.theme.color.bgGrey};

  ::backdrop {
    backdrop-filter: blur(4px);
  }

  @media screen and (min-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

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
