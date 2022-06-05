import React, { useState, useMemo } from "react";

function CounterOne() {
  const [counterOne, setcounterOne] = useState(0);
  const [counterTwo, setcounterTwo] = useState(0);

  const increOne = () => {
    //   console.log("Incre");
    setcounterOne((c) => c + 1);
  };

  const incerTwo = () => {
    setcounterTwo((c) => c + 1);
  };

  const isEven = useMemo(() => {
    console.log("ODDEVVEN");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClickCapture={increOne}>Counter one is {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>

      <div>
        <button onClick={incerTwo}>Counter two is {counterTwo}</button>
      </div>
    </div>
  );
}

export default CounterOne;
