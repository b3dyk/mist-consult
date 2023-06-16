import Button from "../../../components/Button";
import * as SC from "./ServicesSection.styled";
import { IMG } from "../../../assets/images";
import { Container } from "../../../styles/common";
import { options } from "../../../assets/data/options";

export const ServicesSection = () => {
  return (
    <SC.ServicesSection>
      <Container>
        <SC.Title>Послуги</SC.Title>
        <SC.List>
          {Object.keys(options).map((item, idx) => (
            <SC.CardItem key={idx}>
              <SC.CardLink to="services" aria-label="services">
                <picture>
                  <source
                    srcSet={`${IMG[`serviceCard${idx + 1}Desk`]} 1x, ${
                      IMG[`serviceCard${idx + 1}Desk2x`]
                    } 2x`}
                    type="image/webp"
                    media="(min-width: 1440px)"
                  />
                  <source
                    srcSet={`${IMG[`serviceCard${idx + 1}Tab`]} 1x, ${
                      IMG[`serviceCard${idx + 1}Tab2x`]
                    } 2x`}
                    type="image/webp"
                    media="(min-width: 768px)"
                  />
                  <source
                    srcSet={`${IMG[`serviceCard${idx + 1}Mob`]} 1x, ${
                      IMG[`serviceCard${idx + 1}Mob2x`]
                    } 2x`}
                    type="image/webp"
                    media="(max-width: 767px)"
                  />
                  <SC.CardImg src={IMG[`serviceCard${idx + 1}`]} alt={item} />
                </picture>
                <SC.CardTitle>{item}</SC.CardTitle>
              </SC.CardLink>
            </SC.CardItem>
          ))}
        </SC.List>
        <Button />
      </Container>
    </SC.ServicesSection>
  );
};
