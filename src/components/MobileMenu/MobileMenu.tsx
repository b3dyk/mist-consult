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
          <IconButton type="button" onClick={toggleMenu}>
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
      </Container>
    </SC.MobileMenu>
  );
};
