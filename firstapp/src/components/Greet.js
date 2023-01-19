import React from "react";

// function Greet(){
//     return <h1> Hello Prakash </h1>
// }

const Greet = (props) => {
  return (
    <div>
      <h1>
        {" "}
        Hello {props.name} {props.hero}
      </h1>
    </div>
  );
};

export default Greet;
