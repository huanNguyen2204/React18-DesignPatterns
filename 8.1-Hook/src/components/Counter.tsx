import { useState } from "react";

type Operation = "add" | "subtract";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleCounter = (operation: Operation) => {
    if (operation === "add") {
      return setCounter(counter + 1)
    }

    setCounter(counter - 1)
  }

  return (
    <p>
      Counter: {counter} <br />
      <button onClick={() => handleCounter("add")}>+ Add</button>
      <button onClick={() => handleCounter("subtract")}>- Subtract</button>
    </p>
  )
}

export default Counter