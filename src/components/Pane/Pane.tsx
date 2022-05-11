import React from "react";
import "./Pane.css";

interface PropsPane {
  text: string;
}

export function Pane(props: PropsPane) {
  return (
    <div className="pane">
      <h1>{props.text}</h1>
    </div>
  );
}
