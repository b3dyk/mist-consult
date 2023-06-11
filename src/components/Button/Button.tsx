import { useState } from "react";
import * as SC from "./Button.styled";
import Modal from "../Modal";
import Form from "../Form";
// import { useScrollLock } from "../../hooks/useScrollLock";

const Button = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // const { lockScroll, unlockScroll } = useScrollLock();

  // const openModal = () => {
  //   const modal = document.getElementById("modal") as HTMLDialogElement;
  //   lockScroll();
  //   modal.showModal();
  // };

  const toggleModal = () => {
    setIsOpenModal((p) => !p);
  };

  return (
    <>
      <SC.Button type="button" onClick={toggleModal}>
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
          <SC.Number href="tel:+380951401440">+38 (095) 140 14 40</SC.Number>
        </Modal>
      )}
    </>
  );
};

export default Button;
