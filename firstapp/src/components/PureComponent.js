import React, { PureComponent } from "react";

class PureeComponent extends PureComponent {
  render() {
    console.log("Pure component");
    return <div>Pure component{this.props.name}</div>;
  }
}

export default PureeComponent;
