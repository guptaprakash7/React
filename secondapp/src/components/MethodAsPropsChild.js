import React from "react";

function MethodAsPropsChild(props) {
  return (
    <div>
      <button onClick={() => props.ClickHandler("child")}>Greet Parent</button>
    </div>
  );
}

export default MethodAsPropsChild;
