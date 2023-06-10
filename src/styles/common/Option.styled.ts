import styled from "styled-components";
import { SVG } from "../../assets/images";
import { IconButton } from "./IconButton";

interface IProps {
  $expanded: boolean;
}

interface IOption {
  id: string;
}

export const Option = styled.section<IOption>`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const Wrapper = styled.div`
  border-top-right-radius: ${(p) => p.theme.radii.normal};
  border-top-left-radius: ${(p) => p.theme.radii.normal};
  border: 3px solid ${(p) => p.theme.color.accent};
  border-bottom: none;
  overflow: hidden;
`;

export const StyledIconBtn = styled(IconButton)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 48px;
  padding: 8px 16px;

  background-color: ${(p) => p.theme.color.accent};
  color: ${(p) => p.theme.color.white};

  font-weight: ${(p) => p.theme.fontWeight.bold};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xxxl};
    line-height: 1.208;
    padding: 10px 40px;
  }
`;

export const StyledChevron = styled(SVG.Chevron)<IProps>`
  transform: ${(p) => (p.$expanded ? "rotate(180deg)" : "rotate(0)")};
  transition: transform ${(p) => p.theme.animation.main};
`;
export const StyledDoubleChevron = styled(SVG.DoubleChevron)<IProps>`
  transform: ${(p) => (p.$expanded ? "rotate(180deg)" : "rotate(0)")};
  transition: all ${(p) => p.theme.animation.main};
`;

export const ListWrapper = styled.div<IProps>`
  position: relative;
  border: 3px solid ${(p) => p.theme.color.accent};
  border-top: none;
  border-bottom-left-radius: ${(p) => p.theme.radii.normal};
  border-bottom-right-radius: ${(p) => p.theme.radii.normal};
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 8px;
  padding-right: 8px;
  margin-bottom: 20px;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: ${(p) =>
      p.$expanded
        ? `linear-gradient(
      360deg,
      rgba(87, 87, 87, 0.42) 0%,
      rgba(87, 87, 87, 0.21) 5%,
      rgba(87, 87, 87, 0) 10%,
      rgba(255, 255, 255, 0) 100%
    )`
        : `linear-gradient(
      360deg,
      rgba(87, 87, 87, 0.42) 0%,
      rgba(87, 87, 87, 0.21) 10%,
      rgba(87, 87, 87, 0) 35%,
      rgba(255, 255, 255, 0) 100%
    )`};
  }

  @media screen and (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  & + button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const List = styled.ul`
  list-style: disc;
  margin-bottom: 20px;
  padding-left: 20px;
`;

export const Text = styled.p`
  font-weight: ${(p) => p.theme.fontWeight.regular};
  font-size: ${(p) => p.theme.fontSize.s};
  line-height: 2;

  color: ${(p) => p.theme.color.textMain};

  @media screen and (min-width: 768px) {
    font-size: ${(p) => p.theme.fontSize.xl};
  }
`;

export const StyledExpandBtn = styled(StyledIconBtn)`
  justify-content: center;
  gap: 10px;

  font-weight: ${(p) => p.theme.fontWeight.semiBold};
  font-size: ${(p) => p.theme.fontSize.xl};
  line-height: 2;

  background-color: transparent;
  color: ${(p) => p.theme.color.textGrey};
`;
