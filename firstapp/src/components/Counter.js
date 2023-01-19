import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      //   {
      //     count: this.state.count + 1,
      //   },
      () => {
        console.log("calback value", this.state.count);
      }
    );
    console.log(this.state.count);
  }
  incrementBind() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  incrementFiveNew() {
    this.incrementBind();
    this.incrementBind();
    this.incrementBind();
    this.incrementBind();
    this.incrementBind();
  }
  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>count: {this.state.count}</div>
        <button onClick={this.incrementFiveNew.bind(this)}> Increment </button>
      </div>
    );
  }
}

export default Counter;
