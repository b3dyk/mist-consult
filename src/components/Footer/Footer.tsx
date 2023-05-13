import { Container } from "../../styles/common";
import * as SC from "./Footer.styled";

export const Footer = () => {
  return (
    <SC.Footer>
      <Container>
        <SC.Wrapper>
          <SC.Text>&#169; Mist Consult 2023. All rights reserved</SC.Text>
          <SC.Text>{`+38 (097) 555 55 55`}</SC.Text>
        </SC.Wrapper>
      </Container>
    </SC.Footer>
  );
};
