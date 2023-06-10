import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  position: relative;

  :focus-within > input {
    border: 1px solid ${(p) => p.theme.color.accent};
    outline: 1px solid transparent;
  }

  :focus-within > input::placeholder {
    opacity: 1;
  }

  :focus-within > span {
    transform: translate(-10px, -210%) scale(1);
    color: ${(p) => p.theme.color.accent};
  }
`;

export const Input = styled.input`
  padding: 12px 16px;
  width: 100%;

  border: 1px solid ${(p) => p.theme.color.textGrey};
  border-radius: ${(p) => p.theme.radii.normal};

  font-weight: ${(p) => p.theme.fontWeight.regular};
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;

  ::placeholder {
    opacity: 0;
    transition: opacity var(--anim);
  }

  :not(:placeholder-shown) + span {
    transform: translate(-10px, -210%);
    color: ${(p) => p.theme.color.accent};
  }
`;

export const LabelText = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;

  transform: translateY(-50%) scale(1.2);
  font-size: ${(p) => p.theme.fontSize.m};
  line-height: 1.25;
  color: ${(p) => p.theme.color.textMain};

  transition: transform ${(p) => p.theme.animation.main};
`;

export const Button = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 24px;
  padding-right: 24px;

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

  @media screen and (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
  }
`;
