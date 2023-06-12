import { SVG } from "../../../assets/images";
import Button from "../../../components/Button";
import { Container } from "../../../styles/common";
import * as SC from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <SC.HeroSection>
      <Container>
        <SC.Thumb>
          <SC.Logo />
          <SC.HeroWrapper>
            <SC.SubHeading>Консалтингова компанія</SC.SubHeading>
            <SC.HeroHeading>МІСТ КОНСАЛТ</SC.HeroHeading>
            <SC.Motivation>Між метою та результатом є Міст</SC.Motivation>
            <Button />
          </SC.HeroWrapper>
        </SC.Thumb>
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
      </Container>
    </SC.HeroSection>
  );
};
