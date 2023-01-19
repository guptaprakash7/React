import React, { Component } from "react";
import withCounter from "./WithCounter";
class CounterHover extends Component {
  render() {
    const { count, countHandler } = this.props;
    return (
      <div>
        <h1 onMouseOver={countHandler}> click {count} times</h1>
      </div>
    );
  }
}

export default withCounter(CounterHover);
