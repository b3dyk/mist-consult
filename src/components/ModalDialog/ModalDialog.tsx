// import { useModal } from "../../hooks/useModal";
import * as SC from "./ModalDialog.styled";
import Form from "../Form";
import { useScrollLock } from "../../hooks/useScrollLock";

const ModalDialog = () => {
  const { unlockScroll } = useScrollLock();

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
    unlockScroll();
  };

  return (
    <SC.Modal id="modal" className="modal" onClick={handleClose}>
      <SC.EllipseTop />
      <SC.EllipseBottom />
      <SC.Title>Зацікавили послуги?</SC.Title>
      <SC.Text>Введіть ваші контактні дані та ми вам зателефонуємо</SC.Text>

      <Form modal={true} />

      <SC.Cta>або зателефонуйте нам</SC.Cta>
      <SC.Number href="tel:+380951401440">+38 (095) 140 14 40</SC.Number>
    </SC.Modal>
  );
};

export default ModalDialog;
