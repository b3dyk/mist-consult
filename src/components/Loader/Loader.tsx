import { ThreeCircles } from "react-loader-spinner";

import * as SC from "./Loader.styled";

const Loader = () => {
  return (
    <SC.Wrapper>
      <ThreeCircles
        height="100"
        width="100"
        color="#29974e"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </SC.Wrapper>
  );
};

export default Loader;
