/** @format */
import { useState } from "react";
export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increse = () => {
    const incrementResult =
      counter == 20 ? setCounter(counter) : setCounter(counter + 1);
    return incrementResult;
  };

  const decrese = () => {
    const decrementResult =
      counter == 0 ? setCounter(counter) : setCounter(counter - 1);
    return decrementResult;
  };
  return (
    <>
      <h1>Hello world</h1>
      <h2>Counter value : {counter} </h2>

      <button onClick={increse}>Add Value</button>

      <button onClick={decrese}>Remove Value</button>
    </>
  );
}
