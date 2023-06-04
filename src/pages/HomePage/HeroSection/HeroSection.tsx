import Button from "../../../components/Button";
import { Container } from "../../../styles/common";
import * as SC from "./HeroSection.styled";

export const HeroSection = () => {
  return (
    <SC.HeroSection>
      <Container>
        <SC.SubHeading>Консалтингова компанія</SC.SubHeading>
        <SC.HeroHeading>МІСТ КОНСАЛТ</SC.HeroHeading>
        <SC.Motivation>Між метою та результатом є Міст</SC.Motivation>
        <Button />
      </Container>
    </SC.HeroSection>
  );
};
