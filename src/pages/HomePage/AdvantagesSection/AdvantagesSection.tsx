import { Container } from "../../../styles/common";
import { SVG } from "../../../assets/images";
import * as SC from "./AdvantagesSection.styled";

export const AdvantagesSection = () => {
  const years = Math.floor(
    (Date.now() - 1577833200000) / (1000 * 60 * 60 * 24 * 365)
  );

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
              <SC.CardTitle>{years} роки</SC.CardTitle>
              <SC.CardDesc>надаємо послуги в сфері земледіяльності</SC.CardDesc>
            </div>
          </SC.Card>
          <SC.Card>
            <SC.Circle>
              <SVG.UserCheck />
            </SC.Circle>
            <div>
              <SC.CardTitle>200+</SC.CardTitle>
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
              <SC.CardTitle>500+ кейсів</SC.CardTitle>
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
