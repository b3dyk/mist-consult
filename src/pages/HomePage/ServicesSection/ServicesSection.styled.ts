import styled from "styled-components";

export const ServicesSection = styled.section`
  padding-top: 80px;
  padding-bottom: 80px;
  background-color: ${(p) => p.theme.color.bgGrey};
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: 40px;
  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.bxl};
  line-height: 1.219;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const CardItem = styled.li`
  border-radius: ${(p) => p.theme.radii.normal};
  overflow: hidden;

  :hover span {
    transform: translateY(0);
  }
`;

export const CardLink = styled.a`
  position: relative;
`;

export const CardTitle = styled.span`
  position: absolute;
  top: 15%;
  right: 75%;
  width: 200px;

  transform: translateY(-400%);

  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.xxxl};
  line-height: 1.208;
  text-align: start;

  color: ${(p) => p.theme.color.white};

  transition: transform ${(p) => p.theme.animation.long};
`;
