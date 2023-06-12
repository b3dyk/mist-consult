import { useState } from "react";
import * as SC from "./Button.styled";
import Modal from "../Modal";
import Form from "../Form";

const Button = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((p) => !p);
  };

  return (
    <>
      <SC.Button type="button" onClick={toggleModal} aria-label="make order">
        Замовити послугу
      </SC.Button>

      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <SC.EllipseTop />
          <SC.EllipseBottom />
          <SC.Title>Зацікавили послуги?</SC.Title>
          <SC.Text>Введіть ваші контактні дані та ми вам зателефонуємо</SC.Text>

          <Form modal={true} toggleModal={toggleModal} />

          <SC.Cta>або зателефонуйте нам</SC.Cta>
          <SC.Number href="tel:+380951401440" aria-label="phone">
            +38 (095) 140 14 40
          </SC.Number>
        </Modal>
      )}
    </>
  );
};

export default Button;
