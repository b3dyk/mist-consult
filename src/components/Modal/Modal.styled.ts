import styled from "styled-components";
import { SVG } from "../../assets/images";

export const Modal = styled.dialog`
  position: relative;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 59px;
  padding-right: 59px;
  border: 3px solid ${(p) => p.theme.color.accent};
  border-radius: ${(p) => p.theme.radii.large};
  text-align: center;
  background-color: ${(p) => p.theme.color.bgGrey};

  ::backdrop {
    backdrop-filter: blur(4px);
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  position: relative;

  :focus-within > input {
    border: 1px solid ${(p) => p.theme.color.accent};
    outline: 1px solid transparent;
  }

  :focus-within > input::placeholder {
    opacity: 1;
  }

  :focus-within > span {
    transform: translate(-10px, -200%) scale(1);
    color: ${(p) => p.theme.color.accent};
  }
`;

export const Input = styled.input`
  padding: 12px 16px;
  width: 100%;

  border: 1px solid ${(p) => p.theme.color.textGrey};
  border-radius: ${(p) => p.theme.radii.normal};

  font-weight: ${(p) => p.theme.fontWeight.regular};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;

  ::placeholder {
    opacity: 0;
    transition: opacity var(--anim);
  }
`;

export const LabelText = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;

  transform: translateY(-50%) scale(1.2);
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;
  color: ${(p) => p.theme.color.textMain};

  transition: transform ${(p) => p.theme.animation.main};
`;

export const Button = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 24px;
  padding-right: 24px;

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

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;

export const Cta = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;
  margin-bottom: 8px;
`;

export const Number = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
    line-height: 1.208;
  }
`;
