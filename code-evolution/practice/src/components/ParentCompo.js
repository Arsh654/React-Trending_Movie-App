import React, { Component } from "react";
import ChildCompo from "./ChildCompo";

class ParentCompo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildCompo greetFunction={this.greetParent} />
      </div>
    );
  }
}

export default ParentCompo;
