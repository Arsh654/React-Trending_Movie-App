import React from "react";

function ChildCompo(props) {
  return (
    <div>
      <button onClick={() => props.greetFunction("child")}>Click</button>
    </div>
  );
}

export default ChildCompo;
