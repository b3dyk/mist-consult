import styled from "styled-components";

export const Container = styled.div`
  padding: 0 16px;

  @media screen and (min-width: 375px) {
    margin: 0 auto;
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
