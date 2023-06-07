import styled from "styled-components";
import { SVG } from "../../../assets/images";

export const AboutSection = styled.section`
  position: relative;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${(p) => p.theme.color.bgGrey};
  overflow: hidden;
  color: ${(p) => p.theme.color.accent};

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const Logo = styled(SVG.Logo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.1;
  width: 500px;
  height: 500px;

  fill: currentColor;
  filter: blur(2.5px);

  @media screen and (min-width: 768px) {
    width: 800px;
    height: 800px;
  }
`;

export const Title = styled.h2`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.208;
  text-align: center;
  margin-bottom: 24px;
  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.bxl};
    line-height: 1.219;
  }
`;

export const DescList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const DescItem = styled.li`
  display: flex;
  gap: 16px;

  @media screen and (min-width: 768px) {
    align-items: center;
    gap: 64px;
  }

  @media screen and (min-width: 1440px) {
    gap: 80px;
  }

  ::before {
    content: "";
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    border: 4px solid ${(p) => p.theme.color.accent};
    border-radius: 50%;

    @media screen and (min-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Description = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.regular};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 1.5;
  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
    line-height: 1.5;
  }
`;
