import styled from "styled-components";
import { SVG } from "../../assets/images";

export const ContactsSection = styled.section`
  padding-top: 58px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-bottom: 40px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.219;

  color: ${(p) => p.theme.color.textMain};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.bxl};
    margin-bottom: 64px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 80px;
  }
`;

export const Subtitle = styled.h2`
  position: absolute;
  top: 77px;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: 64px;
  line-height: 1.219;

  color: ${(p) => p.theme.color.snowWhite};
  text-shadow: 1px 0px 1px rgba(0, 0, 0, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.1),
    -1px 0px 1px rgba(0, 0, 0, 0.1), 0px -1px 1px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.22;
    top: 144px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 150px;
    top: 106px;
  }
`;

export const Logo = styled(SVG.Logo)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  opacity: 0.1;
  max-width: 500px;
  width: 100%;
  height: 500px;

  fill: ${(p) => p.theme.color.accent};
  filter: blur(2.5px);

  @media screen and (min-width: 768px) {
    max-width: 800px;
    height: 800px;
  }

  @media screen and (min-width: 1440px) {
    top: 45%;
    max-width: 1000px;
    height: 1000px;
  }
`;

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 12px;

  border: ${(p) => p.theme.border.regular};
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.color.bgGrey};
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-left: 16px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-right: 24px;
    padding-left: 24px;
  }

  @media screen and (min-width: 1440px) {
    flex-basis: calc((100% - 40px) / 3);
    :not(:last-of-type) {
      gap: 42px;
    }
  }
`;

export const ContactTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Phone = styled(SVG.Phone)`
  width: 24px;
  height: 24px;
`;
export const Envelope = styled(SVG.Envelope)`
  width: 26px;
  height: 21px;
`;
export const Pin = styled(SVG.Pin)`
  width: 26px;
  height: 30px;
`;

export const ContsctTitle = styled.h3`
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 1.2;
  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
  }
`;

export const Contact = styled.a`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.5;
  text-decoration: none;
  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xl};
  }

  :hover {
    color: ${(p) => p.theme.color.accent};
  }
`;

export const MapSection = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const MapTitle = styled.h3`
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.208;
  color: ${(p) => p.theme.color.accent};
  text-align: center;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.bxl};
    line-height: 1.219;
    margin-bottom: 40px;
  }
`;

export const Map = styled.iframe`
  width: 100%;
  height: 432px;
  border: ${(p) => p.theme.border.regular};
  border-radius: ${(p) => p.theme.radii.normal};
`;

export const FormSection = styled.section`
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const FormWrapper = styled.div`
  position: relative;
  border: ${(p) => p.theme.border.regular};
  border-radius: ${(p) => p.theme.radii.normal};
  padding: 40px 24px;
  text-align: center;
  background-color: ${(p) => p.theme.color.bgGrey};
  overflow: hidden;

  @media screen and (min-width: 768px) {
    padding-left: 120px;
    padding-right: 120px;
  }

  @media screen and (min-width: 1440px) {
    padding-left: 355px;
    padding-right: 355px;
  }
`;

export const EllipseTop = styled(SVG.EllipseTop)`
  position: absolute;
  top: -45px;
  left: 0;

  @media screen and (min-width: 768px) {
    top: 0;
  }
`;

export const EllipseBottom = styled(SVG.EllipseBottom)`
  position: absolute;
  bottom: -73px;
  right: 0;

  @media screen and (min-width: 768px) {
    bottom: 0;
  }
`;

export const FormTitle = styled.h2`
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.219;
  color: ${(p) => p.theme.color.accent};
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.bxl};
    line-height: 1.219;
  }
`;

export const FormText = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.208;
  max-width: 425px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 48px;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
    line-height: 1.208;
  }
`;
