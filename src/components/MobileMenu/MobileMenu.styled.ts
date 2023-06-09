import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../styles/common";

export const MobileMenu = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 100vh;

  background-color: #fff;

  transform: translateX(100%);

  &.isOpen {
    transform: translateX(0);
  }

  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const MobileContainer = styled(Container)`
  position: relative;
  z-index: 7;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-bottom: 36px;
`;

export const MenuTitle = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 1.2;
  text-transform: uppercase;
`;

export const List = styled.ul`
  position: relative;
  z-index: 6;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding-top: 8px;
  padding-bottom: 8px;

  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;
  color: ${(p) => p.theme.color.textMain};
  text-decoration: none;

  &.active {
    color: ${(p) => p.theme.color.accent};
  }

  @media screen and (min-width: 768px) {
    transition: color ${(p) => p.theme.animation.main};
  }

  @media screen and (min-width: 1440px) {
    :hover,
    :focus {
      color: ${(p) => p.theme.color.accent};
    }
  }
`;

export const ContsctsList = styled.ul`
  position: relative;
  z-index: 6;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 16px;
  margin-top: 100px;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(p) => p.theme.color.textMain};
  text-decoration: none;
  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.5;
`;

export const DevText = styled.p`
  position: absolute;
  bottom: 60px;
  left: 50%;
  z-index: 10;
  transform: translateX(-50%);
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.xs};
  line-height: 1.5;
  text-align: center;
  color: ${(p) => p.theme.color.textGrey};
  min-width: 250px;
`;
