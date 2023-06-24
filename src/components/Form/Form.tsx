import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";
import * as SC from "./Form.styled";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useModal } from "../../hooks/useModal";

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
  const { toggleModal } = useModal();
  const form = useRef<HTMLFormElement>(null);

  const [data, setData] = useLocalStorage("formData", initialState);
  const [loading, setLoading] = useState(false);

  const notifyError = (message: string) => toast.error(message);
  const notifySuccess = (message: string) => toast.success(message);

  const handleChange = ({
    currentTarget: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const name = data!.name.trim();
    const phone = data!.phone.trim();

    if (!name || !phone) {
      notifyError("Будь ласка, заповніть всі поля");
      return;
    }

    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_pa2rtel",
        "template_h0ne274",
        form.current!,
        "ap6C1hhoh9C5MJmIr"
      );

      notifySuccess("Дякуємо! Наші працівники скоро зв'яжуться з вами");

      setData(initialState);
      localStorage.removeItem("formData");

      toggleModal();
    } catch (error) {
      console.log(error);
      notifyError("Йой, щось пішло не так");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SC.Form onSubmit={sendEmail} modal={modal} ref={form}>
      <SC.Label>
        <SC.Input
          type="text"
          name="name"
          value={data!.name}
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
          value={data!.phone}
          placeholder="+38 (095) 140 14 40"
          max="10"
          onChange={handleChange}
          required
        />
        <SC.LabelText>Телефон</SC.LabelText>
      </SC.Label>
      <SC.Button aria-label="form submit">
        {loading ? (
          <ThreeDots
            height="18"
            width="80"
            radius="9"
            color="currentColor"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              height: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            wrapperClass=""
            visible={true}
          />
        ) : (
          "Замовити дзвінок"
        )}
      </SC.Button>
    </SC.Form>
  );
};

export default Form;
