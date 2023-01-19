import React, { Component } from "react";

class SetStateDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  clickHandler = () => {
    //this.state.count = this.state.count + 1;
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log(this.state.count)
      //   {
      //     count: this.state.count + 1,
      //   },
      //   () => {
      //     console.log(this.state.count);
      //   }
    );
    // console.log(this.state.count);
  };

  clickFiveTimesHandler = () => {
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={this.clickFiveTimesHandler}> Click</button>
      </div>
    );
  }
}

export default SetStateDemo;
