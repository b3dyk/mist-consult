import { IMG } from "../../../assets/images";
import { Container } from "../../../styles/common";
import * as SC from "./AboutSection.styled";

export const AboutSection = () => {
  return (
    <SC.AboutSection>
      <Container>
        <SC.Thumb>
          <picture>
            <source
              srcSet={`${IMG.aboutUs} 1x, ${IMG.aboutUs2x} 2x`}
              type="image/webp"
              media="(min-width: 1200px)"
            />
            <SC.Image src={IMG.aboutUs} alt="about us" />
          </picture>

          <SC.Wrapper>
            <SC.Title>Про компанію</SC.Title>
            <SC.Description>
              Lorem ipsum dolor sit amet consectetur. Et lacus facilisis aliquet
              scelerisque quisque turpis morbi condimentum. Facilisis tristique
              facilisi id enim fermentum. Amet volutpat lacus urna semper at.
              Pretium lobortis fames id lobortis lacus non volutpat pulvinar. In
              faucibus dolor tristique fermentum. Tincidunt neque augue mauris
              mi a vitae odio ullamcorper pellentesque. Sed arcu nunc tellus
              adipiscing.
            </SC.Description>
          </SC.Wrapper>
        </SC.Thumb>
      </Container>
    </SC.AboutSection>
  );
};
