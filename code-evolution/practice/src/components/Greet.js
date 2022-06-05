import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    <>
      <h1>
        HELLO {props.name} loves {props.sport}
      </h1>
      {props.children}
    </>
  );
};

export default Greet;
