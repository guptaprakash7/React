import React from "react";

function ConditionalRendering(props) {
  return props.isLoggedIn && <h1>Hello User </h1>;
  //return props.isLoggedIn ? <h1>Hello User </h1> : <h1>Hello Guest </h1>;

  //   let message = "";
  //   if (props.isLoggedIn) {
  //     message = <h1>Hello User </h1>;
  //   } else {
  //     message = <h1>Hello Guest </h1>;
  //   }
  //   return <div>{message}</div>;

  //   if (props.isLoggedIn) {
  //     return (
  //       <div>
  //         <h1>Hello User </h1>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <h1>Hello Guest </h1>
  //       </div>
  //     );
  //   }
}

export default ConditionalRendering;
