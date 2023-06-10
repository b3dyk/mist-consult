import styled from "styled-components";

export const Title = styled.h2`
  padding-top: 40px;
  padding-bottom: 20px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.bxl};
  line-height: 1.219;

  color: ${(p) => p.theme.color.textMain};
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 64px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

export const Subtitle = styled.h2`
  position: absolute;
  top: 58px;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: 75px;
  line-height: 1.22;

  color: ${(p) => p.theme.color.snowWhite};
  text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.1),
    -1px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 1px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    top: 127px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 150px;
    top: 107px;
  }
`;
