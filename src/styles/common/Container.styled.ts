import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 1280px;
  }
`;
