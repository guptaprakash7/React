import React from "react";

function ChildComponent(props) {
  return <button onClick={() => props.greetHandler("Prakash")}></button>;
}

export default ChildComponent;
