import React, { Component } from "react";

class MyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "",
    };
  }

  onChangeUserNameHandler = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  onChangeCommentHandler = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.onChangeUserNameHandler}
          />{" "}
        </div>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.onChangeCommentHandler}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react"> React </option>
            <option value="angular"> Angular </option>
            <option value="vue"> Vue </option>
          </select>
        </div>
        <button type="submit"> Submit</button>
      </form>
    );
  }
}

export default MyForm;
