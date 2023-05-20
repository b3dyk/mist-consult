import { Container } from "../../styles/common";
import * as SC from "./ServicesPage.styled";
import { options } from "../../assets/data/options";
import Option from "./Option";

const ServicesPage: React.FC = () => {
  return (
    <>
      <Container>
        <SC.Title>Послуги</SC.Title>
        {Object.keys(options).map((item, idx) => (
          <Option key={idx} title={item} idx={idx + 1} />
        ))}
      </Container>
    </>
  );
};

export default ServicesPage;
