import { IMG } from "../../../assets/images";
import Button from "../../../components/Button";
import { Container } from "../../../styles/common";
import * as SC from "./ServicesSection.styled";

export const ServicesSection = () => {
  return (
    <SC.ServicesSection>
      <Container>
        <SC.Title>Послуги</SC.Title>
        <SC.List>
          <SC.CardItem>
            <SC.CardLink to="services">
              <SC.CardTitle>Земельні відносини</SC.CardTitle>
              <picture>
                <source
                  srcSet={`${IMG.serviceCard1Desk} 1x, ${IMG.serviceCard1Desk2x} 2x`}
                  type="image/webp"
                  media="(min-width: 1440px)"
                />
                <source
                  srcSet={`${IMG.serviceCard1Tab} 1x, ${IMG.serviceCard1Tab2x} 2x`}
                  type="image/webp"
                  media="(min-width: 768px)"
                />
                <source
                  srcSet={`${IMG.serviceCard1Mob} 1x, ${IMG.serviceCard1Mob2x} 2x`}
                  type="image/webp"
                  media="(max-width: 767px)"
                />
                <img src={IMG.serviceCard1} alt="field" />
              </picture>
            </SC.CardLink>
          </SC.CardItem>
          <SC.CardItem>
            <SC.CardLink to="services">
              <SC.CardTitle>Містобудівна діяльність</SC.CardTitle>
              <picture>
                <source
                  srcSet={`${IMG.serviceCard2Desk} 1x, ${IMG.serviceCard2Desk2x} 2x`}
                  type="image/webp"
                  media="(min-width: 1440px)"
                />
                <source
                  srcSet={`${IMG.serviceCard2Tab} 1x, ${IMG.serviceCard2Tab2x} 2x`}
                  type="image/webp"
                  media="(min-width: 768px)"
                />
                <source
                  srcSet={`${IMG.serviceCard2Mob} 1x, ${IMG.serviceCard2Mob2x} 2x`}
                  type="image/webp"
                  media="(max-width: 767px)"
                />
                <img src={IMG.serviceCard2} alt="building" />
              </picture>
            </SC.CardLink>
          </SC.CardItem>
          <SC.CardItem>
            <SC.CardLink to="services">
              <SC.CardTitle>Благоустрій</SC.CardTitle>
              <picture>
                <source
                  srcSet={`${IMG.serviceCard3Desk} 1x, ${IMG.serviceCard3Desk2x} 2x`}
                  type="image/webp"
                  media="(min-width: 1440px)"
                />
                <source
                  srcSet={`${IMG.serviceCard3Tab} 1x, ${IMG.serviceCard3Tab2x} 2x`}
                  type="image/webp"
                  media="(min-width: 768px)"
                />
                <source
                  srcSet={`${IMG.serviceCard3Mob} 1x, ${IMG.serviceCard3Mob2x} 2x`}
                  type="image/webp"
                  media="(max-width: 767px)"
                />
                <img src={IMG.serviceCard3} alt="street" />
              </picture>
            </SC.CardLink>
          </SC.CardItem>
        </SC.List>
        <Button />
      </Container>
    </SC.ServicesSection>
  );
};
