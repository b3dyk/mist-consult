import React, { useEffect, MouseEvent } from "react";
import { createPortal } from "react-dom";

import * as SC from "./Modal.styled";
import { SVG } from "../../assets/images";
import { useScrollLock } from "../../hooks/useScrollLock";

const modalRoot = document.querySelector("#modal-root") as HTMLElement;

interface IProps {
  toggleModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ toggleModal, children }: IProps) => {
  const { lockScroll, unlockScroll } = useScrollLock();

  useEffect(() => {
    const closeModal = (evt: Event): void => {
      if (evt instanceof KeyboardEvent && evt.code === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", closeModal);
    lockScroll();

    return () => {
      window.removeEventListener("keydown", closeModal);
      unlockScroll();
    };
  }, [toggleModal]);

  const closeOnClick = (evt: MouseEvent<HTMLElement>) => {
    if (evt.target === evt.currentTarget) {
      toggleModal();
    }
  };

  return createPortal(
    <SC.Overlay onClick={closeOnClick}>
      <SC.Inner>
        {children}
        <SC.CloseBtn type="button" onClick={toggleModal} aria-label="close">
          <SC.CloseIcon />
        </SC.CloseBtn>
      </SC.Inner>
    </SC.Overlay>,

    modalRoot
  );
};
