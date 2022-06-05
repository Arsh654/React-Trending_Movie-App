import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("CallBack Value ", this.state.count);
    //   }
    // );

    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("CallBack Value INCREMENT ", this.state.count);
      }
    );
    console.log(this.state.count + " Checking Async Nature");
  }

  decrement() {
    if (this.state.count > 0) {
      // this.setState(
      //   {
      //     count: this.state.count - 1,
      //   },
      //   () => {
      //     console.log("CallBack Value", this.state.count);
      //   }
      // );

      this.setState(
        (prevState) => ({
          count: prevState.count - 1,
        }),
        () => {
          console.log("CallBack Value DECREMENT", this.state.count);
        }
      );
      console.log(this.state.count + " Checking Async Nature");
    }
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
      <>
        <div>Counter Stands at:- {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment + </button>
        <button onClick={() => this.decrement()}>Decrement -</button>
      </>
    );
  }
}

export default Counter;
