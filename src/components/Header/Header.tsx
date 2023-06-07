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
  const { isScreenMobile, isScreenDesktop } = useResize();

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
              {isScreenDesktop && (
                <SC.ContsctsList>
                  <li>
                    <SC.ContactLink href="tel:+380951401440">
                      +38 (095) 140 14 40
                    </SC.ContactLink>
                  </li>
                  <li>
                    <SC.ContactLink href="mailto:mist.consult.law@gmail.com">
                      mist.consult.law@gmail.com
                    </SC.ContactLink>
                  </li>
                </SC.ContsctsList>
              )}
            </SC.Wrapper>
          )}
        </SC.HeaderContainer>
      </Container>
      {isScreenMobile && <MobileMenu toggleMenu={handleBurgerMenu} />}
    </SC.Header>
  );
};

export default Header;
