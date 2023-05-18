import styled from "styled-components";

export const Main = styled.main`
  margin-top: 48px;
  min-height: calc(100vh - 48px - 84px);

  @media screen and (min-width: 768px) {
    margin-top: 112px;
    min-height: calc(100vh - 112px - 84px);
  }

  @media screen and (min-width: 1440px) {
    min-height: calc(100vh - 112px - 124px);
  }
`;
