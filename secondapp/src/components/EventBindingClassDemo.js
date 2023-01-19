import React, { Component } from "react";

class EventBindingClassDemo extends Component {
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
  }
  clickHandlerArrow = () => {
    this.setState({
      message: "Welcome",
    });
  };

  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={this.clickHandler.bind(this)}> Click</button>
        <button onClick={() => this.clickHandler()}> Click</button>
        <button onClick={this.clickHandler}> Click</button>
        <button onClick={this.clickHandlerArrow}> Click</button>
      </div>
    );
  }
}

export default EventBindingClassDemo;
