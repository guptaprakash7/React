import React, { Component } from "react";
import withCounter from "./WithCounter";
class CounterClick extends Component {
  render() {
    const { count, countHandler } = this.props;
    return (
      <div>
        <button onClick={countHandler}>
          {" "}
          {this.props.name} {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(CounterClick);
