import { useCallback, useState } from "react";

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsOpenModal((p) => !p);
  }, []);

  return { isOpenModal, toggleModal };
};

// export const useModal = (id: string) => {
//   const modal = document.querySelector(id) as HTMLDialogElement;
//   function open() {
//     return modal.showModal();
//   }

//   function close(e: React.MouseEvent<HTMLDialogElement>) {
//     const dialogDimensions = modal.getBoundingClientRect();
//     if (
//       e.clientX < dialogDimensions.left ||
//       e.clientX > dialogDimensions.right ||
//       e.clientY < dialogDimensions.top ||
//       e.clientY > dialogDimensions.bottom
//     ) {
//       return modal.close();
//     }
//     return;
//   }

//   return {
//     open,
//     close,
//   };
// };
