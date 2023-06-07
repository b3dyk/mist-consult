import { Container } from "../../../styles/common";
import { SVG } from "../../../assets/images";
import * as SC from "./AdvantagesSection.styled";
import CountUp from "react-countup";

export const AdvantagesSection = () => {
  const years = Math.floor(
    (Date.now() - 1577833200000) / (1000 * 60 * 60 * 24 * 365)
  );

  return (
    <SC.AdvantagesSection>
      <Container>
        <SC.AdvantagesHeading className="visually-hidden">
          Чому обирають нас?
        </SC.AdvantagesHeading>
        <SC.CardsList>
          <SC.Card>
            <SC.Circle>
              <SVG.UserCheck />
            </SC.Circle>
            <div>
              <SC.CardTitle>
                <CountUp start={0} end={years} delay={1} duration={3} /> роки
              </SC.CardTitle>
              <SC.CardDesc>надаємо послуги в сфері земледіяльності</SC.CardDesc>
            </div>
          </SC.Card>
          <SC.Card>
            <SC.Circle>
              <SVG.UserCheck />
            </SC.Circle>
            <div>
              <SC.CardTitle>
                <CountUp start={0} end={200} delay={1} duration={3} />+
              </SC.CardTitle>
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
              <SC.CardTitle>
                <CountUp start={0} end={500} delay={1} duration={3} />+ кейсів
              </SC.CardTitle>
              <SC.CardDesc>від наших клієнтів, які ми вирішили</SC.CardDesc>
            </div>
          </SC.Card>
          <SC.Card>
            <SC.Circle>
              <SVG.BookOpen />
            </SC.Circle>
            <div>
              <SC.CardTitle>
                <CountUp start={0} end={40} delay={1} duration={3} />+ послуг
              </SC.CardTitle>
              <SC.CardDesc>наша компанія пропонує своїм клієнтам</SC.CardDesc>
            </div>
          </SC.Card>
        </SC.CardsList>
      </Container>
    </SC.AdvantagesSection>
  );
};
