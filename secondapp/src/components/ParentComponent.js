import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const greetChild = (child) => {
    alert(`Hello from ${child}`);
  };
  return <ChildComponent greetChild={greetChild}></ChildComponent>;
}

export default ParentComponent;
