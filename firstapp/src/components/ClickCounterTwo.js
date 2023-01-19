import React, { Component } from "react";

class CountClickTwo extends Component {
  render() {
    const { count, countHandler } = this.props;
    return (
      <div>
        <h1 onMouseOver={countHandler}> click {count} times</h1>
      </div>
    );
  }
}

export default CountClickTwo;
