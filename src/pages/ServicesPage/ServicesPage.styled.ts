import styled from "styled-components";

export const Title = styled.h2`
  padding-top: 80px;
  padding-bottom: 40px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.bxl};
  line-height: 1.219;

  color: ${(p) => p.theme.color.textMain};
  text-align: center;
`;
