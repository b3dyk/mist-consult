import styled from "styled-components";
import { IconButton } from "../../styles/common";

export const ArrowUp = styled(IconButton)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 50px;
  max-width: 50px;
  border-radius: 50%;
  padding: 8px;
  opacity: 0;
  pointer-events: none;

  background-color: ${(p) => p.theme.color.accent};

  transition: opacity ${(p) => p.theme.animation.long};

  &.visible {
    opacity: 0.8;
    pointer-events: initial;
  }

  @media screen and (min-width: 768px) {
    max-height: 80px;
    max-width: 80px;
    padding: 16px;
  }
`;
