import { useState } from "react";
import * as SC from "./Form.styled";
import { toast } from "react-toastify";

export interface IFormProps {
  modal: boolean;
  toggleModal?: () => void;
}

interface IState {
  [key: string]: string;
}

const initialState: IState = {
  name: "",
  phone: "",
};

const Form = ({ modal, toggleModal }: IFormProps) => {
  const [data, setData] = useState(initialState);
  const notifyError = (message: string) => toast.error(message);
  const notifySuccess = (message: string) => toast.success(message);

  const handleChange = ({
    currentTarget: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const name = data.name.trim();
    const phone = data.phone.trim();

    if (!name || !phone) {
      notifyError("Будь ласка, заповніть всі поля");
      return;
    }

    notifySuccess("Дякуємо! Наші працівники скоро зв'яжуться з вами");

    console.log({ name, phone });
    setData(initialState);

    if (toggleModal) {
      toggleModal();
    }
  };

  return (
    <SC.Form onSubmit={handleSubmit} modal={modal}>
      <SC.Label>
        <SC.Input
          type="text"
          name="name"
          value={data.name}
          placeholder="Андрій Андрієнко"
          onChange={handleChange}
          autoFocus={modal ? true : false}
          required
        />
        <SC.LabelText>Ім'я</SC.LabelText>
      </SC.Label>
      <SC.Label>
        <SC.Input
          type="tel"
          name="phone"
          value={data.phone}
          placeholder="+38 (095) 140 14 40"
          onChange={handleChange}
          required
        />
        <SC.LabelText>Телефон</SC.LabelText>
      </SC.Label>
      <SC.Button aria-label="form submit">Замовити дзвінок</SC.Button>
    </SC.Form>
  );
};

export default Form;
