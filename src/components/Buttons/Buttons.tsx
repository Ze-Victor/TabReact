import React from "react";
import "./Buttons.css";

interface PropsTab {
  text: string;
  idx: number;
  currentTab: number;
  onSelectButton?: (currentTab: number) => void;
}

export function Buttons(props: PropsTab) {
  return (
    <button
      className="button"
      key={props.idx}
      onClick={() => props.onSelectButton && props.onSelectButton(props.idx)}
    >
      {props.text}
    </button>
  );
}
