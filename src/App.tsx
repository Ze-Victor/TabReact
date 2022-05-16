import React from "react";
import "./App.css";
import { Tab } from "./components/Tab/Tab";

const tab = [
  {
    textButton: "Tab1",
    textPane: "Conteúdo do primeiro tab",
  },
  {
    textButton: "Tab2",
    textPane: "Conteúdo do segundo tab",
  },
  {
    textButton: "Tab3",
    textPane: "Conteúdo do terceiro tab",
  },
];

function App() {
  const onClickButton = (optionButton: number) => {
    console.log(`Você selecionou a opção ${optionButton}`);
  };

  return <Tab tabProp={tab} onClickButton={onClickButton} />;
}

export default App;
