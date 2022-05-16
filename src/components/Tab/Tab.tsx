import React, { useState } from "react";
import { Buttons } from "../Buttons/Buttons";
import { Pane } from "../Pane/Pane";
import "./Tab.css";

interface ArrayTab {
  textButton: string;
  textPane: string;
}

interface PropsTab {
  tabProp: ArrayTab[];
  onClickButton: (n: number) => void;
}

export function Tab(props: PropsTab) {
  const [currentTab, setCurrentTab] = useState(0);

  const onSelectTab = (optionIndex: number) => {
    props.onClickButton(optionIndex);
    setCurrentTab(optionIndex);
  };

  return (
    <div className="tab">
      <div className="buttonArea">
        {props.tabProp.map((tab, idx) => {
          return (
            <div key={idx} className="buttonElement">
              <Buttons
                text={tab.textButton}
                idx={idx}
                onSelectButton={onSelectTab}
                currentTab={currentTab}
              />
            </div>
          );
        })}
      </div>
      <Pane text={props.tabProp[currentTab].textPane} />
    </div>
  );
}
