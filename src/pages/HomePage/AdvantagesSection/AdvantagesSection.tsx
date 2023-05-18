import { Container } from "../../../styles/common";
import { SVG } from "../../../assets/images";
import * as SC from "./AdvantagesSection.styled";

export const AdvantagesSection = () => {
  return (
    <SC.AdvantagesSection>
      <Container>
        <SC.AdvantagesHeading>Чому обирають нас?</SC.AdvantagesHeading>
        <SC.CardsList>
          <SC.Card>
            <SC.Circle>
              <SVG.UserCheck />
            </SC.Circle>
            <div>
              <SC.CardTitle>3 роки</SC.CardTitle>
              <SC.CardDesc>надаємо послуги в сфері земледіяльності</SC.CardDesc>
            </div>
          </SC.Card>
          <SC.Card>
            <SC.Circle>
              <SVG.UserCheck />
            </SC.Circle>
            <div>
              <SC.CardTitle>100+</SC.CardTitle>
              <SC.CardDesc>
                клієнтів, які звернулись до нашої компанії
              </SC.CardDesc>
            </div>
          </SC.Card>
          <SC.Card>
            <SC.Circle>
              <SVG.Calendar />
            </SC.Circle>
            <div>
              <SC.CardTitle>100+ кейсів</SC.CardTitle>
              <SC.CardDesc>від наших клієнтів, які ми вирішили</SC.CardDesc>
            </div>
          </SC.Card>
          <SC.Card>
            <SC.Circle>
              <SVG.BookOpen />
            </SC.Circle>
            <div>
              <SC.CardTitle>40+ послуг</SC.CardTitle>
              <SC.CardDesc>наша компанія пропонує своїм клієнтам</SC.CardDesc>
            </div>
          </SC.Card>
        </SC.CardsList>
      </Container>
    </SC.AdvantagesSection>
  );
};
