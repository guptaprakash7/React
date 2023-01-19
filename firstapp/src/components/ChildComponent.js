import React from "react";

function ChildComponent(props) {
  debugger;
  return <button onClick={() => props.greetChild("Prakash")}></button>;
}

export default ChildComponent;
