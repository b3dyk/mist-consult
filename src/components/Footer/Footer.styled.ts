import styled from "styled-components";

export const Footer = styled.footer`
  padding-top: 50px;
  padding-bottom: 50px;
  /* background-color: ${(p) => p.theme.color.bgGrey}; */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.medium};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.5;
`;

export const DevText = styled(Text)`
  font-size: ${(p) => p.theme.fontSize.xs};
  color: ${(p) => p.theme.color.textGrey};
`;

export const ContsctsList = styled.ul`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 40px;
  }
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

  transition: color ${(p) => p.theme.animation.main};

  @media screen and (min-width: 1440px) {
    gap: 16px;
  }

  :hover,
  :focus {
    color: ${(p) => p.theme.color.accent};
  }
`;
