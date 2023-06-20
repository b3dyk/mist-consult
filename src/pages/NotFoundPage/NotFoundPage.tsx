import { Container } from "../../styles/common";
import * as SC from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <SC.Page>
      <Container>
        <SC.Wrapper>
          <SC.Title>
            4
            <SC.Logo />4
          </SC.Title>
          <SC.Text>Йой, десь ми звернули не туди...</SC.Text>
          <SC.Button to="/">На головну</SC.Button>
        </SC.Wrapper>
      </Container>
    </SC.Page>
  );
};

export default NotFoundPage;
