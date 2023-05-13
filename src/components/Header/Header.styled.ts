import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  box-shadow: 0px 4px 12px rgba(202, 202, 202, 0.25);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${(p) => p.theme.color.snowWhite};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    gap: 32px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding-top: 14px;
  padding-bottom: 14px;
  text-decoration: none;

  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;

  color: ${(p) => p.theme.color.textMain};

  transition: color ${(p) => p.theme.animation.main};

  :hover,
  :focus {
    color: ${(p) => p.theme.color.accent};
  }

  &.active {
    color: ${(p) => p.theme.color.accent};
    border-bottom: 3px solid ${(p) => p.theme.color.accent};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media screen and (min-width: 1440px) {
    gap: 80px;
  }
`;
