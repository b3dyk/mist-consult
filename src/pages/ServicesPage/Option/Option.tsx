import { useState } from "react";
import { IMG } from "../../../assets/images";
import Button from "../../../components/Button";
import * as SC from "../../../styles/common/Option.styled";
import { options } from "../../../assets/data/options";
import { useWindowScrollPositions } from "../../../hooks/useWindowScrollPosition";

interface IOptionsProps {
  title: string;
  idx: number;
}

export const Option = ({ title, idx }: IOptionsProps) => {
  const [expanded, setExpanded] = useState(false);
  const { scrollY } = useWindowScrollPositions();

  const optionValues = options[title];

  const handleExpand = (evt: React.PointerEvent<HTMLButtonElement>) => {
    setExpanded((prev) => !prev);

    if (expanded) {
      switch (evt.currentTarget.name) {
        case "Земельні відносини":
          return window.scrollTo(0, 189);

        case "Містобудівна діяльність":
          return window.scrollTo(0, 1167);

        default:
          return;
      }
    } else {
      window.scrollTo(0, scrollY + 250);
    }
  };

  return (
    <SC.Option id={idx.toString()}>
      <SC.Wrapper>
        <picture>
          <source
            srcSet={`${IMG[`spOption${idx}Desk`]} 1x, ${
              IMG[`spOption${idx}Desk2x`]
            } 2x`}
            type="image/webp"
            media="(min-width: 1440px)"
          />
          <source
            srcSet={`${IMG[`spOption${idx}Tab`]} 1x, ${
              IMG[`spOption${idx}Tab2x`]
            } 2x`}
            type="image/webp"
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${IMG[`spOption${idx}Mob`]} 1x, ${
              IMG[`spOption${idx}Mob2x`]
            } 2x`}
            type="image/webp"
            media="(max-width: 767px)"
          />
          <img src={IMG[`spOption${idx}`]} alt={title} />
        </picture>
        <SC.StyledIconBtn
          type="button"
          onClick={handleExpand}
          disabled={optionValues.length < 5}
        >
          {title}:
          <SC.StyledChevron $expanded={expanded} />
        </SC.StyledIconBtn>
      </SC.Wrapper>
      <SC.ListWrapper $expanded={expanded}>
        <SC.List>
          {expanded
            ? optionValues.map((item, index) => (
                <li key={index}>
                  <SC.Text>{item}</SC.Text>
                </li>
              ))
            : optionValues.slice(0, 5).map((item, index) => (
                <li key={index}>
                  <SC.Text>{item}</SC.Text>
                </li>
              ))}
        </SC.List>
        {optionValues.length > 5 && (
          <SC.StyledExpandBtn type="button" name={title} onClick={handleExpand}>
            {expanded ? "Згорнути" : "Розгорнути"}
            <SC.StyledDoubleChevron $expanded={expanded} />
          </SC.StyledExpandBtn>
        )}
      </SC.ListWrapper>
      <Button />
    </SC.Option>
  );
};
