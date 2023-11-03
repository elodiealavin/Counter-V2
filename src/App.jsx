import { useState } from "react";

import "./App.css";

function App() {
  const [counters, setCounters] = useState([3, 0]);
  // const onClickReset = () => setCounter(0);

  return (
    <>
      <section>
        <div>
          <button
            onClick={() => {
              const newCounter = [...counters];
              newCounter.push(counters);
              setCounters(newCounter);
            }}
          >
            Add counter
          </button>
        </div>

        <div>
          {counters.map((counter) => {
            <div>
              <button
                onClick={() => {
                  setCounters(counters - 1);
                }}
              >
                -
              </button>

              <span>{counters}</span>

              <button
                onClick={() => {
                  setCounters(counters + 1);
                }}
              >
                +
              </button>
            </div>;
          })}
        </div>
      </section>

      {/* <div>
          <button onClick={onClickReset}>Reset</button>
        </div> */}
    </>
  );
}

export default App;
