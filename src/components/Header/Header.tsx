import { Link } from "react-router-dom";
import Button from "../Button";
import MobileMenu from "../MobileMenu";
import * as SC from "./Header.styled";
import { SVG } from "../../assets/images";
import { Container } from "../../styles/common/Container.styled";
import { useResize } from "../../hooks/useResize";
import { IconButton } from "../../styles/common";

const Header = () => {
  const handleBurgerMenu = () => {
    const mobileMenu = document.querySelector("#mobileMenu") as HTMLElement;
    mobileMenu.classList.toggle("isOpen");
  };
  const { isScreenMobile } = useResize();

  return (
    <SC.Header>
      <Container>
        <SC.HeaderContainer>
          <Link to="/">
            <SC.Logo />
          </Link>
          {isScreenMobile ? (
            <IconButton type="button" onClick={handleBurgerMenu}>
              <SVG.Burger />
            </IconButton>
          ) : (
            <SC.Wrapper>
              <nav>
                <SC.NavList>
                  <li>
                    <SC.StyledLink to="/">Головна</SC.StyledLink>
                  </li>
                  <li>
                    <SC.StyledLink to="services">Послуги</SC.StyledLink>
                  </li>
                  <li>
                    <SC.StyledLink to="contacts">Контакти</SC.StyledLink>
                  </li>
                </SC.NavList>
              </nav>
              <Button />
            </SC.Wrapper>
          )}
        </SC.HeaderContainer>
      </Container>
      {isScreenMobile && <MobileMenu toggleMenu={handleBurgerMenu} />}
    </SC.Header>
  );
};

export default Header;
