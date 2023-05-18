import styled from "styled-components";
import { IMG } from "../../../assets/images";

export const HeroSection = styled.section`
  margin: 0 auto;
  background-color: ${(p) => p.theme.color.bgGrey};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding-top: 136px;
  padding-bottom: 159px;

  background-image: url(${IMG.heroBgMob});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${IMG.heroBgMob2x});
  }

  @media screen and (min-width: 768px) {
    padding-top: 140px;
    padding-bottom: 115px;
    max-width: 768px;
    background-image: url(${IMG.heroBgTab});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${IMG.heroBgTab2x});
    }
  }

  @media screen and (min-width: 1440px) {
    padding-top: 198px;
    padding-bottom: 179px;
    max-width: 1440px;
    background-image: url(${IMG.heroBgDesc});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${IMG.heroBgDesc2x});
    }
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

  @media screen and (max-width: 767px) {
    width: 288px;
  }

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
