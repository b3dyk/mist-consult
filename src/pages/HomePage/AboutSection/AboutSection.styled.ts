import styled from "styled-components";

export const AboutSection = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: ${(p) => p.theme.color.bgGrey};

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const Thumb = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 64px;
  }
`;

export const Image = styled.img`
  border-radius: ${(p) => p.theme.radii.normal};

  @media screen and (max-width: 1439px) {
    margin-bottom: 24px;
  }
`;

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 64px * (2 - 1)) / 2);
  }
`;

export const Title = styled.h2`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.208;
  margin-bottom: 24px;
  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.bxl};
    line-height: 1.219;
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
