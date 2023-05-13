import Button from "../../../components/Button";
import { IMG } from "../../../assets/images";
import { Container } from "../../../styles/common";
import * as SC from "./ServicesSection.styled";

export const ServicesSection = () => {
  return (
    <SC.ServicesSection>
      <Container>
        <SC.Title>Послуги</SC.Title>
        <SC.List>
          <SC.CardItem>
            <SC.CardLink href="">
              <SC.CardTitle>Земельні відносини</SC.CardTitle>
              <picture>
                <source
                  srcSet={`${IMG.serviceCard1} 1x, ${IMG.serviceCard12x} 2x`}
                  type="image/webp"
                  media="(min-width: 1200px)"
                />
                <img src={IMG.serviceCard1} alt="field" />
              </picture>
            </SC.CardLink>
          </SC.CardItem>
          <SC.CardItem>
            <SC.CardLink href="">
              <SC.CardTitle>Містобудівна діяльність</SC.CardTitle>
              <picture>
                <source
                  srcSet={`${IMG.serviceCard2} 1x, ${IMG.serviceCard22x} 2x`}
                  type="image/webp"
                  media="(min-width: 1200px)"
                />
                <img src={IMG.serviceCard2} alt="building" />
              </picture>
            </SC.CardLink>
          </SC.CardItem>
          <SC.CardItem>
            <SC.CardLink href="">
              <SC.CardTitle>Благоустрій</SC.CardTitle>
              <picture>
                <source
                  srcSet={`${IMG.serviceCard3} 1x, ${IMG.serviceCard32x} 2x`}
                  type="image/webp"
                  media="(min-width: 1200px)"
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
