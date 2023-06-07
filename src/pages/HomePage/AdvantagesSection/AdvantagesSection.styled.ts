import styled from "styled-components";

export const AdvantagesSection = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
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

export const AdvantagesHeading = styled.h2`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  color: ${(p) => p.theme.color.textMain};
  line-height: 1.208;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.bxl};
    line-height: 1.219;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 64px;
  }
`;

export const CardsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (min-width: 768px) {
    row-gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-wrap: nowrap;
    gap: 20px;
  }
`;

export const Card = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  text-align: start;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px * (2 - 1)) / 2);
  }

  @media screen and (min-width: 1440px) {
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: column;
    flex-basis: calc((100% - 20px * (4 - 1)) / 4);

    text-align: center;
  }
`;

export const Circle = styled.div`
  width: 72px;
  height: 72px;
  padding: 20px;

  border-radius: ${(p) => p.theme.radii.circle};
  border: 4px solid ${(p) => p.theme.color.accent};
  background-color: ${(p) => p.theme.color.snowWhite};

  & > svg {
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    width: 96px;
    height: 96px;
    padding: 24px;

    & > svg {
      width: 40px;
      height: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    border: 8px solid ${(p) => p.theme.color.accent};

    width: 120px;
    height: 120px;
    padding: 28px;
    margin-bottom: 20px;

    & > svg {
      width: 48px;
      height: 48px;
    }
  }
`;

export const CardTitle = styled.h3`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.208;
  color: ${(p) => p.theme.color.textMain};
  margin-bottom: 4px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 8px;
  }
`;

export const CardDesc = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.4;

  color: ${(p) => p.theme.color.textSecondary};
`;
