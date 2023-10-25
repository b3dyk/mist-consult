import { useEffect } from "react";

import { Container } from "../../styles/common";
import { options } from "../../assets/data/options";
import { Option } from "./Option";

import * as SC from "./ServicesPage.styled";

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <SC.Subtitle>Послуги</SC.Subtitle>
        <SC.Title>Послуги</SC.Title>
        {Object.keys(options).map((item, idx) => (
          <Option key={idx} title={item} idx={idx + 1} />
        ))}
      </Container>
    </>
  );
};

export default ServicesPage;
