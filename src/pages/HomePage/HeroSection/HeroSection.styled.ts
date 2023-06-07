import styled from "styled-components";
import { SVG } from "../../../assets/images";
import { Container } from "../../../styles/common";

export const HeroSection = styled.section`
  margin: 0 auto;
  padding-top: 67px;
  padding-bottom: 66px;

  @media screen and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding-top: 96px;
    padding-bottom: 95px;
    max-width: 768px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 142px;
    padding-bottom: 142px;
    max-width: 1440px;
  }
`;

export const StyledContainer = styled(Container)`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 77px;
  }
`;

export const Logo = styled(SVG.Logo)`
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1440px) {
    width: 356px;
    height: 356px;
  }
`;

export const SubHeading = styled.h2`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 1.2;
  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
    line-height: 1.208;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSize.bxl};
    line-height: 1.219;
  }
`;

export const HeroHeading = styled.h1`
  font-weight: ${(p) => p.theme.fontWeight.boldxl};
  font-size: ${(p) => p.theme.fontSize.bxxl};
  line-height: 1.225;

  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.heroTab};
    line-height: 1.214;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSize.hero};
    line-height: 1.216;
  }
`;

export const Motivation = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    width: 360px;
  }

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xl};
    line-height: 1.2;
  }

  @media screen and (min-width: 1440px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
    line-height: 1.208;
  }
`;
