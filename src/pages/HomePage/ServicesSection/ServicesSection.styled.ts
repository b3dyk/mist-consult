import styled from "styled-components";

export const ServicesSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  /* text-align: center; */

  @media screen and (min-width: 1440px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.bxl};
  line-height: 1.219;
  color: ${(p) => p.theme.color.textMain};
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  & + button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardItem = styled.li`
  position: relative;
  z-index: 10;
  border-radius: ${(p) => p.theme.radii.normal};
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    transition: transform ${(p) => p.theme.animation.long};

    :hover {
      transform: scale(1.01);
    }

    :hover span {
      transform: translateY(0) scale(1.1);
    }
  }
`;

export const CardLink = styled.a`
  position: relative;
  z-index: 10;
`;

export const CardTitle = styled.span`
  position: absolute;
  top: 24px;
  left: 32px;
  width: 200px;
  z-index: 5;

  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 1.208;
  text-align: start;

  color: ${(p) => p.theme.color.white};

  @media screen and (min-width: 1440px) {
    top: 70px;
    left: 50px;
    transform: translateY(-100%) scale(0.9);
    transition: transform ${(p) => p.theme.animation.long};
  }
`;
