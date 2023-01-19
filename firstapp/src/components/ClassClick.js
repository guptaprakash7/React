import React, { Component } from "react";

class ClassClick extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: "Welcome",
    });
    console.log(this.state.message);
  }
  //   clickHandler = () => {
  //     this.setState({
  //       message: "Welcome",
  //     });
  //     console.log(this.state.message);
  //   };
  render() {
    return (
      <div>
        {this.state.message}
        {/* <button onClick={this.clickHandler}>click me </button> */}
        {/* <button onClick={this.clickHandler.bind(this)}>click me </button> */}
        {/* <button onClick={() => this.clickHandler()}>click me </button> */}
        <button onClick={this.clickHandler}>click me </button>
      </div>
    );
  }
}

export default ClassClick;
