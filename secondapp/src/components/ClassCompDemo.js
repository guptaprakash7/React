import react, { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      message: "I luv you",
    };
  }
  replyHandler = () => {
    this.setState({
      message: "I luv you too",
    });
  };
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        {this.state.message}
        <button onClick={this.replyHandler}> Please answer </button>
      </div>
    );
  }
}

export default ClassComponent;
