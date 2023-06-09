import { SVG } from "../../assets/images";
import { Container } from "../../styles/common";
import * as SC from "./Footer.styled";

export const Footer = () => {
  return (
    <SC.Footer>
      <Container>
        <SC.Wrapper>
          <div>
            <SC.Text>&#169; Mist Consult 2023. All rights reserved</SC.Text>
            <SC.DevText>
              Developed by Oleksandr Perlov and Artur Yushkov
            </SC.DevText>
          </div>
          <SC.ContsctsList>
            <li>
              <SC.ContactLink href="tel:+380951401440" aria-label="phone">
                <SVG.Phone />
                +38 (095) 140 14 40
              </SC.ContactLink>
            </li>
            <li>
              <SC.ContactLink
                href="mailto:mist.consult.law@gmail.com"
                aria-label="email"
              >
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
