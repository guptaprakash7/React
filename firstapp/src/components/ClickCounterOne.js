import React, { Component } from "react";

class CountClickOne extends Component {
  render() {
    const { count, countHandler } = this.props;
    return (
      <div>
        <button onClick={countHandler}> click {count} times</button>
      </div>
    );
  }
}

export default CountClickOne;
