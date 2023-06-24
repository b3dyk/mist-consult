// import { useEffect } from "react";
// import { useScrollLock } from "./useScrollLock";
// import { useModal } from "./useModal";

// export const useModalHandler = () => {
//   const { toggleModal } = useModal();
//   const { lockScroll, unlockScroll } = useScrollLock();

//   useEffect(() => {
//     const closeModal = (evt: Event): void => {
//       if (evt instanceof KeyboardEvent && evt.code === "Escape") {
//         toggleModal();
//       }
//     };
//     window.addEventListener("keydown", closeModal);
//     lockScroll();

//     return () => {
//       window.removeEventListener("keydown", closeModal);
//       unlockScroll();
//     };
//   }, [toggleModal]);

//   const closeOnClick = (evt: MouseEvent<HTMLDivElement>) => {
//     if (evt.target === evt.currentTarget) {
//       toggleModal();
//     }
//   };

//   return { toggleModal, closeOnClick };
// };
