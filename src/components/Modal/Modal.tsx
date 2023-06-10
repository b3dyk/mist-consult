// import { useModal } from "../../hooks/useModal";
import * as SC from "./Modal.styled";
import Form from "../Form";

const Modal = () => {
  // const { close } = useModal(".modal");

  const handleClose = (e: React.MouseEvent<HTMLDialogElement>) => {
    const modal = document.getElementById("modal") as HTMLDialogElement;
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  };

  return (
    <SC.Modal id="modal" className="modal" onClick={handleClose}>
      <SC.EllipseTop />
      <SC.EllipseBottom />
      <SC.Title>Зацікавили послуги?</SC.Title>
      <SC.Text>Введіть ваші контактні дані та ми вам зателефонуємо</SC.Text>

      <Form />

      <SC.Cta>або зателефонуйте нам</SC.Cta>
      <SC.Number href="tel:+380951401440">+38 (095) 140 14 40</SC.Number>
    </SC.Modal>
  );
};

export default Modal;
