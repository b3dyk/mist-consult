import { Link } from "react-router-dom";
import Button from "../Button";
import MobileMenu from "../MobileMenu";
import * as SC from "./Header.styled";
import { SVG } from "../../assets/images";
import { Container } from "../../styles/common/Container.styled";
import { useResize } from "../../hooks/useResize";
import { IconButton } from "../../styles/common";
import { useMobMenu } from "../../hooks/useMobMenu";

const Header = () => {
  const handleBurgerMenu = useMobMenu();
  const { isScreenMobile } = useResize();

  return (
    <SC.Header>
      <Container>
        <SC.HeaderContainer>
          <Link to="/" aria-label="main" rel="canonical">
            <SC.Logo />
          </Link>
          {isScreenMobile ? (
            <IconButton
              type="button"
              onClick={handleBurgerMenu}
              aria-label="open menu"
            >
              <SVG.Burger />
            </IconButton>
          ) : (
            <SC.Wrapper>
              <nav>
                <SC.NavList>
                  <li>
                    <SC.StyledLink to="/" aria-label="main" rel="canonical">
                      Головна
                    </SC.StyledLink>
                  </li>
                  <li>
                    <SC.StyledLink to="services" aria-label="services">
                      Послуги
                    </SC.StyledLink>
                  </li>
                  <li>
                    <SC.StyledLink to="contacts" aria-label="contacts">
                      Контакти
                    </SC.StyledLink>
                  </li>
                </SC.NavList>
              </nav>
              <Button />
            </SC.Wrapper>
          )}
        </SC.HeaderContainer>
      </Container>
      {isScreenMobile && <MobileMenu />}
    </SC.Header>
  );
};

export default Header;
