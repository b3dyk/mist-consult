// import { useModal } from "../../hooks/useModal";
import * as SC from "./Modal.styled";

const Modal = () => {
  // const { close } = useModal(".modal");
  const handleSubmit = (evt: React.MouseEvent<HTMLButtonElement>) => {};

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
      <SC.Form method="dialog">
        <SC.Label>
          <SC.Input
            type="text"
            name="name"
            placeholder="Андрій Андрієнко"
            required
          />
          <SC.LabelText>Ім'я</SC.LabelText>
        </SC.Label>
        <SC.Label>
          <SC.Input
            type="tel"
            name="phone"
            placeholder="+38 (095) 140 14 40"
            required
          />
          <SC.LabelText>Телефон</SC.LabelText>
        </SC.Label>
        <SC.Button type="submit" onClick={handleSubmit}>
          Замовити дзвінок
        </SC.Button>
      </SC.Form>
      <SC.Cta>або зателефонуйте нам</SC.Cta>
      <SC.Number>+38 (095) 140 14 40</SC.Number>
    </SC.Modal>
  );
};

export default Modal;
