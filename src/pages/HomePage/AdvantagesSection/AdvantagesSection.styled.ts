import styled from "styled-components";

export const AdvantagesSection = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  text-align: center;
  /* background-color: ${(p) => p.theme.color.bgGrey}; */
`;

export const AdvantagesHeading = styled.h2`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.bxl};
  line-height: 1.219;

  margin-bottom: 64px;
`;

export const CardsList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  flex-basis: 25%;
`;

export const Circle = styled.div`
  width: 120px;
  height: 120px;
  padding: 28px;
  margin-bottom: 20px;

  border-radius: ${(p) => p.theme.radii.circle};
  border: 8px solid ${(p) => p.theme.color.accent};
`;

export const CardTitle = styled.h3`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.208;
  margin-bottom: 8px;
`;

export const CardDesc = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.4;

  color: ${(p) => p.theme.color.textSecondary};
`;
