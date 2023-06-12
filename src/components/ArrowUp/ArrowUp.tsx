import { SVG } from "../../assets/images";
import * as SC from "./ArrowUp.styled";
import { useWindowScrollPositions } from "../../hooks/useWindowScrollPosition";

const ArrowUp = () => {
  const { scrollY } = useWindowScrollPositions();

  const goUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <SC.ArrowUp
      type="button"
      aria-label="move up"
      onClick={goUp}
      className={scrollY > 100 ? "visible" : ""}
    >
      <SVG.Up />
    </SC.ArrowUp>
  );
};

export default ArrowUp;
