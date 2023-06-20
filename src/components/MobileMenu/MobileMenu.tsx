import { SVG } from "../../assets/images";
import { Container, IconButton } from "../../styles/common";
import * as SC from "./MobileMenu.styled";

type MobileMenuProps = {
  toggleMenu: () => void;
};

export const MobileMenu = ({ toggleMenu }: MobileMenuProps) => {
  return (
    <SC.MobileMenu id="mobileMenu">
      <Container>
        <SC.Wrapper>
          <SC.MenuTitle>Міст Консалт</SC.MenuTitle>
          <IconButton
            type="button"
            onClick={toggleMenu}
            aria-label="close menu"
          >
            <SVG.Close />
          </IconButton>
        </SC.Wrapper>
        <nav>
          <SC.List>
            <li>
              <SC.StyledLink to="/" onClick={toggleMenu}>
                Головна
              </SC.StyledLink>
            </li>
            <li>
              <SC.StyledLink to="services" onClick={toggleMenu}>
                Послуги
              </SC.StyledLink>
            </li>
            <li>
              <SC.StyledLink to="contacts" onClick={toggleMenu}>
                Контакти
              </SC.StyledLink>
            </li>
          </SC.List>
        </nav>
        <SC.ContsctsList>
          <li>
            <SC.ContactLink href="tel:+380951401440">
              <SVG.Phone />
              +38 (095) 140 14 40
            </SC.ContactLink>
          </li>
          <li>
            <SC.ContactLink href="mailto:mist.consult.law@gmail.com">
              <SVG.Envelope />
              mist.consult.law@gmail.com
            </SC.ContactLink>
          </li>
        </SC.ContsctsList>
        <SC.DevText>Developed by Oleksandr Perlov and Artur Yushkov</SC.DevText>
      </Container>
    </SC.MobileMenu>
  );
};
