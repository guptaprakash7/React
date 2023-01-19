import React, { Component } from "react";

class CounterNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>{this.props.children(this.state.count, this.countHandler)} </div>
    );
  }
}

export default CounterNew;
