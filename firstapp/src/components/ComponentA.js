import React, { Component } from "react";
import ComponentB from "./ComponentB";

export class ComponentA extends Component {
  render() {
    return (
      <div>
        <ComponentB></ComponentB>
      </div>
    );
  }
}

export default ComponentA;
