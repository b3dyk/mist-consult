import styled from "styled-components";
import { IMG } from "../../../assets/images";

export const HeroSection = styled.section`
  margin: 0 auto;
  background-color: ${(p) => p.theme.color.bgGrey};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
  font-size: ${(p) => p.theme.fontSize.bxl};
  line-height: 1.219;

  color: ${(p) => p.theme.color.textMain};
`;

export const HeroHeading = styled.h1`
  font-weight: ${(p) => p.theme.fontWeight.boldxl};
  font-size: ${(p) => p.theme.fontSize.hero};
  line-height: 1.216;
`;

export const Motivation = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.208;
  margin-bottom: 40px;
`;
