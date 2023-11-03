import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState([0]);
  const onClickReset = () => setCounter(0);

  return (
    <>
      <section>
        <div>
          <button
            onClick={() => {
              const newCounter = [...counter];
              newCounter.push(counter);
              setCounter(newCounter);
            }}
          >
            {" "}
            Add counter{" "}
          </button>
        </div>

        <div>
          <button
            onClick={() => {
              setCounter(counter - 1);
            }}
          >
            -
          </button>

          <p>{counter}</p>

          <button
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            +
          </button>
        </div>

        <div>
          <button onClick={onClickReset}>Reset</button>
        </div>
      </section>
    </>
  );
}

export default App;
