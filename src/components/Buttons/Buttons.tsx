import React from "react";
import "./Buttons.css";

interface PropsTab {
  text: string;
  onSelect: () => void;
}

export function Buttons(props: PropsTab) {
  return (
    <button className="button" onClick={props.onSelect}>
      {props.text}
    </button>
  );
}
