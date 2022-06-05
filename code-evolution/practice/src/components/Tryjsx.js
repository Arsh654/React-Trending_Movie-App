import React from "react";

const Tryjsx = () => {
  //   return (
  //     <div>
  //       <h1>This is from JSX</h1>
  //     </div>
  //   );
  // actaul BTS stuff
  return React.createElement(
    "div",
    { id: "hello", className: "dummyJSX" },
    React.createElement("h1", null, "This is from JSX")
  );
};

export default Tryjsx;
