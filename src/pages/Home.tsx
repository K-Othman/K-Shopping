import { useState } from "react";

function Home() {
  const [counter, setCounter] = useState(0);

  const clickHandler = (action: string) => {
    if (action === "+") {
      setCounter(counter + 1);
    }
    if (action === "-" && counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={() => clickHandler("+")}>+</button>
      <button onClick={() => clickHandler("-")}>-</button>
      <p>{counter}</p>
    </div>
  );
}

export default Home;
