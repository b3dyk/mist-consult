import { SVG } from "../../assets/images";
import { Container } from "../../styles/common";
import * as SC from "./Footer.styled";

export const Footer = () => {
  return (
    <SC.Footer>
      <Container>
        <SC.Wrapper>
          <SC.Text>&#169; Mist Consult 2023. All rights reserved</SC.Text>
          <SC.ContsctsList>
            <li>
              <SC.ContactLink href="tel:+380951401440">
                <SVG.Phone />
                +38 (095) 140 14 40
              </SC.ContactLink>
            </li>
            <li>
              <SC.ContactLink href="mailto:mist.consult.law@gmail.com">
                <SVG.Envelope />
                mist.consult.law@gmail.com
              </SC.ContactLink>
            </li>
          </SC.ContsctsList>
        </SC.Wrapper>
      </Container>
    </SC.Footer>
  );
};
