import { useState } from "react";
import { IMG } from "../../../assets/images";
import Button from "../../../components/Button";
import * as SC from "../../../styles/common/Option.styled";
import { options } from "../../../assets/data/options";

interface IOptionsProps {
  title: string;
  idx: number;
}

export const Option = ({ title, idx }: IOptionsProps) => {
  const [expanded, setExpanded] = useState(false);

  const arrayToMap = options[title];

  const handleExpand = () => {
    setExpanded((prev) => !prev);
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
          disabled={arrayToMap.length < 5}
        >
          {title}:
          <SC.StyledChevron $expanded={expanded} />
        </SC.StyledIconBtn>
      </SC.Wrapper>
      <SC.ListWrapper $expanded={expanded}>
        <SC.List>
          {expanded
            ? arrayToMap.map((item, index) => (
                <li key={index}>
                  <SC.Text>{item}</SC.Text>
                </li>
              ))
            : arrayToMap.slice(0, 5).map((item, index) => (
                <li key={index}>
                  <SC.Text>{item}</SC.Text>
                </li>
              ))}
        </SC.List>
        {arrayToMap.length > 5 && (
          <SC.StyledExpandBtn type="button" onClick={handleExpand}>
            {expanded ? "Згорнути" : "Розгорнути"}
            <SC.StyledDoubleChevron $expanded={expanded} />
          </SC.StyledExpandBtn>
        )}
      </SC.ListWrapper>
      <Button />
    </SC.Option>
  );
};
