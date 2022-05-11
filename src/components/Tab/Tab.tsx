import React, { useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import { Pane } from "../Pane/Pane";
import "./Tab.css";

const buttons = [
  {
    textButton: "Tab1",
    textContent: "Conteúdo do primeiro tab",
  },
  {
    textButton: "Tab2",
    textContent: "Conteúdo do segundo tab",
  },
  {
    textButton: "Tab3",
    textContent: "Conteúdo do terceiro tab",
  },
];

export function Tab() {
  const [currentTab, setCurrentTab] = useState(0);

  function select(optionIndex: number) {
    console.log(`Selecionou a opção ${optionIndex}`);
    setCurrentTab(optionIndex);
  }

  return (
    <div className="tab">
      <div className="buttonArea">
        {buttons.map((button, idx) => {
          return (
            <div className="buttonElement">
              <Buttons text={button.textButton} onSelect={() => select(idx)} />
            </div>
          );
        })}
      </div>
      <Pane text={buttons[currentTab].textContent} />
    </div>
  );
}
