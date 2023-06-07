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
