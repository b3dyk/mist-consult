import styled from "styled-components";

export const Button = styled.button`
  padding: 14px 32px;

  cursor: pointer;
  border: none;
  border-radius: ${(p) => p.theme.radii.normal};
  background-color: ${(p) => p.theme.color.accent};
  color: ${(p) => p.theme.color.white};

  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;

  transition: background-color ${(p) => p.theme.animation.main},
    transform ${(p) => p.theme.animation.main},
    outline ${(p) => p.theme.animation.main};

  :hover,
  :focus {
    background-color: ${(p) => p.theme.color.accent};
    outline: 1px solid #5ad784;
  }

  :active {
    transform: scale(0.99);
  }
`;
