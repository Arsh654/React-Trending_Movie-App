import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Click to subscribe.",
    };
  }

  clickMessage() {
    this.setState({
      message: "You have subscribed.",
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.clickMessage()}>Subscribe me</button>
      </>
    );
  }
}

export default Message;
