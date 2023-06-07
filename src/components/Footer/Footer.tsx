import { Container } from "../../styles/common";
import * as SC from "./Footer.styled";

export const Footer = () => {
  return (
    <SC.Footer>
      <Container>
        <SC.Wrapper>
          <SC.Text>&#169; Mist Consult 2023. All rights reserved</SC.Text>
          <SC.ContactLink href="tel:+380951401440">
            +38 (095) 140 14 40
          </SC.ContactLink>
        </SC.Wrapper>
      </Container>
    </SC.Footer>
  );
};
