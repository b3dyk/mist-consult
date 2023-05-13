import { Link } from "react-router-dom";
import { IMG } from "../../assets/images";
import * as SC from "./Header.styled";
import { Container } from "../../styles/common/Container.styled";
import Button from "../Button";

export const Header = () => {
  return (
    <SC.Header>
      <Container>
        <SC.HeaderContainer>
          <Link to="/">
            <img src={IMG.logo} alt="logo" width="80" />
          </Link>
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
        </SC.HeaderContainer>
      </Container>
    </SC.Header>
  );
};
