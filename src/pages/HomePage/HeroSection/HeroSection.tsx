import Button from "../../../components/Button";
import { Container } from "../../../styles/common";
import * as SC from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <SC.HeroSection>
      <Container>
        <SC.SubHeading>Консалтингова компанія</SC.SubHeading>
        <SC.HeroHeading>МІСТ КОНСАЛТ</SC.HeroHeading>
        <SC.Motivation>
          Тут було б добре мати ваш слоган або мотивуючу фразу
        </SC.Motivation>
        <Button />
      </Container>
    </SC.HeroSection>
  );
};
