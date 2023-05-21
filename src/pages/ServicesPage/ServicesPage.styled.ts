import styled from "styled-components";

export const Title = styled.h2`
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.bxl};
  line-height: 1.219;

  color: ${(p) => p.theme.color.textMain};
  text-align: center;

  @media screen and (min-width: 768px) {
    padding-top: 40px;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;
