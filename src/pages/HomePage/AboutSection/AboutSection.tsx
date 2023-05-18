import { IMG } from "../../../assets/images";
import { useResize } from "../../../hooks/useResize";
import { Container } from "../../../styles/common";
import * as SC from "./AboutSection.styled";

export const AboutSection = () => {
  const { isScreenDesktop } = useResize();

  return (
    <SC.AboutSection>
      <Container>
        {!isScreenDesktop && <SC.Title>Про компанію</SC.Title>}
        <SC.Thumb>
          <picture>
            <source
              srcSet={`${IMG.aboutUsDesk} 1x, ${IMG.aboutUsDesk2x} 2x`}
              type="image/webp"
              media="(min-width: 1440px)"
            />
            <source
              srcSet={`${IMG.aboutUsTab} 1x, ${IMG.aboutUsTab2x} 2x`}
              type="image/webp"
              media="(min-width: 768px)"
            />
            <source
              srcSet={`${IMG.aboutUsMob} 1x, ${IMG.aboutUsMob2x} 2x`}
              type="image/webp"
              media="(max-width: 767px)"
            />
            <SC.Image src={IMG.aboutUs} alt="about us" />
          </picture>

          <SC.Wrapper>
            {isScreenDesktop && <SC.Title>Про компанію</SC.Title>}
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
