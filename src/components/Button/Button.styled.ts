import styled from "styled-components";

export const Button = styled.button`
  padding: 14px 32px;

  cursor: pointer;
  border: 3px solid transparent;
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.color.accent};
  color: ${(p) => p.theme.color.white};

  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;

  transition: background-color ${(p) => p.theme.animation.main},
    transform ${(p) => p.theme.animation.main},
    border-color ${(p) => p.theme.animation.main};

  :hover {
    background-color: ${(p) => p.theme.color.white};
    border: 3px solid;
    border-color: ${(p) => p.theme.color.accent};
    color: ${(p) => p.theme.color.accent};
  }

  :active {
    transform: scale(0.99);
  }

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
