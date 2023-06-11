import styled from "styled-components";
import { SVG } from "../../assets/images";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 20;
  overflow-y: auto;
  backdrop-filter: blur(2.5px);
  padding: 8px;
`;

export const Inner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 32px;
  padding-right: 32px;
  text-align: center;
  background-color: ${(p) => p.theme.color.bgGrey};

  max-width: 518px;
  width: 90%;

  max-height: 90%;
  border-radius: ${(props) => props.theme.radii.normal};
  border: ${(p) => p.theme.border.regular};
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(p) => p.theme.color.textMain};
  transition: color ${(p) => p.theme.animation.main};

  :hover {
    color: ${(p) => p.theme.color.accent};
  }
`;

export const CloseIcon = styled(SVG.Close)`
  fill: currentColor;
`;
