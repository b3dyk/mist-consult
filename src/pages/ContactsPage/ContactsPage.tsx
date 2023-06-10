import Form from "../../components/Form";
import { Container } from "../../styles/common";
import * as SC from "./ContactsPage.styled";
import { useEffect } from "react";

const ContactsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <SC.Logo />
        <SC.ContactsSection>
          <SC.Subtitle>Контакти</SC.Subtitle>
          <SC.Title>Контакти</SC.Title>

          <SC.ContactsList>
            <SC.ContactItem>
              <SC.ContactTitleWrapper>
                <SC.Phone />
                <SC.ContsctTitle>Телефон</SC.ContsctTitle>
              </SC.ContactTitleWrapper>
              <SC.Contact>+38 095 140 14 40</SC.Contact>
            </SC.ContactItem>
            <SC.ContactItem>
              <SC.ContactTitleWrapper>
                <SC.Envelope />
                <SC.ContsctTitle>Пошта</SC.ContsctTitle>
              </SC.ContactTitleWrapper>
              <SC.Contact>mist.consult.law@gmail.com</SC.Contact>
            </SC.ContactItem>
            <SC.ContactItem>
              <SC.ContactTitleWrapper>
                <SC.Pin />
                <SC.ContsctTitle>Адреса</SC.ContsctTitle>
              </SC.ContactTitleWrapper>
              <SC.Contact>
                м. Київ вул. Михайла Омеляновича-Павленка, 13
              </SC.Contact>
            </SC.ContactItem>
          </SC.ContactsList>
        </SC.ContactsSection>

        <SC.MapSection>
          <SC.MapTitle>Знайдіть нас на мапі</SC.MapTitle>
          <SC.Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.255158137981!2d30.54473497697416!3d50.43634778837865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa7725cadcf%3A0x4411a7e67bbc2782!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCe0LzQtdC70Y_QvdC-0LLQuNGH0LAt0J_QsNCy0LvQtdC90LrQsCwgMTMsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1686406007329!5m2!1suk!2sua"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></SC.Map>
        </SC.MapSection>

        <SC.FormSection>
          <SC.FormWrapper>
            <SC.EllipseTop />
            <SC.EllipseBottom />
            <SC.FormTitle>Зацікавили послуги?</SC.FormTitle>
            <SC.FormText>
              Введіть ваші контактні дані та ми вам зателефонуєм
            </SC.FormText>
            <Form modal={false} />
          </SC.FormWrapper>
        </SC.FormSection>
      </Container>
    </>
  );
};

export default ContactsPage;
