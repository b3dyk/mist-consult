import styled from "styled-components";

export const AboutSection = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${(p) => p.theme.color.bgGrey};
`;

export const Thumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

export const Image = styled.img``;

export const Wrapper = styled.div`
  flex-basis: 49%;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.bxl};
  line-height: 1.219;
`;

export const Description = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.regular};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.5;
`;
