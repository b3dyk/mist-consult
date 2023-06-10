import { useState } from "react";
import * as SC from "./Form.styled";

export interface IFormProps {
  modal: boolean;
}

interface IState {
  [key: string]: string;
}

const initialState: IState = {
  name: "",
  phone: "",
};

const Form = ({ modal }: IFormProps) => {
  const [data, setData] = useState(initialState);

  const handleChange = ({
    currentTarget: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    console.log(data);
    setData(initialState);
  };

  return (
    <SC.Form method="dialog" onSubmit={handleSubmit} modal={modal}>
      <SC.Label>
        <SC.Input
          type="text"
          name="name"
          value={data.name}
          placeholder="Андрій Андрієнко"
          onChange={handleChange}
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
      <SC.Button type="submit">Замовити дзвінок</SC.Button>
    </SC.Form>
  );
};

export default Form;
