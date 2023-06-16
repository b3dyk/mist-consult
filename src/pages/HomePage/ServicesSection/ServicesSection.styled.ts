import { Link } from "react-router-dom";
import styled from "styled-components";

export const ServicesSection = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;

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
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 1439px) {
    flex-direction: column;
  }

  & + button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const CardItem = styled.li`
  border: 1px solid ${(p) => p.theme.color.accent};
  border-radius: ${(p) => p.theme.radii.normal};
  overflow: hidden;
  width: 100%;
  padding-bottom: 24px;
  height: 320px;

  @media screen and (min-width: 1440px) {
    transition: transform ${(p) => p.theme.animation.main};

    :hover {
      transform: scale(1.01);
    }
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const CardImg = styled.img`
  width: 341px;

  @media screen and (min-width: 768px) {
    width: 380px;
  }

  @media screen and (min-width: 1440px) {
    width: 378px;
  }
`;

export const CardTitle = styled.span`
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.208;

  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 1440px) {
    transition: transform ${(p) => p.theme.animation.long};
  }
`;
