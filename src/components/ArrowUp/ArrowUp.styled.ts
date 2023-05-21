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
  max-height: 80px;
  max-width: 80px;
  border-radius: 50px;
  padding: 16px;
  opacity: 0;
  pointer-events: none;

  background-color: ${(p) => p.theme.color.accent};

  transition: opacity ${(p) => p.theme.animation.long};

  &.visible {
    opacity: 1;
    pointer-events: initial;
  }
`;
