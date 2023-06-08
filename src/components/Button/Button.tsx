// import { useModal } from "../../hooks/useModal";
import * as SC from "./Button.styled";

const Button = () => {
  // const { open } = useModal("modal");

  const openModal = () => {
    const modal = document.getElementById("modal") as HTMLDialogElement;
    modal.showModal();
  };
  return (
    <SC.Button type="button" onClick={openModal}>
      Замовити послугу
    </SC.Button>
  );
};

export default Button;
