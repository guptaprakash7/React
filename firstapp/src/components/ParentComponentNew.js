import React, { Component, memo } from "react";
import MemoComp from "./MemoComp";
import PureComponent from "./PureComponent";
import RegComp from "./RegComp";

class ParentComponentNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Prakash",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "gupta",
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <RegComp name={this.state.name}></RegComp>{" "}
        <PureComponent name={this.state.name}></PureComponent>
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    );
  }
}

export default ParentComponentNew;
