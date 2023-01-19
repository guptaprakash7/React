import React, { Component } from "react";
import MethodAsPropsChild from "./MethodAsPropsChild";

class MethodAsPropParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };
  }

  greetHandler = (childName) => {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  };

  render() {
    return (
      <div>
        <MethodAsPropsChild
          ClickHandler={this.greetHandler}
        ></MethodAsPropsChild>
      </div>
    );
  }
}

export default MethodAsPropParent;
