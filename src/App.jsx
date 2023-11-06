import { useState } from "react";

import "./App.css";

function App() {
  const [counters, setCounters] = useState([0]);
  // const onClickReset = () => setCounter(0);

  return (
    <>
      <section>
        <div>
          {counters.length < 3 && (
            <button
              onClick={() => {
                const newCounter = [...counters];
                newCounter.push(0);
                setCounters(newCounter);
                console.log("valeur", newCounter);
              }}
            >
              Add counter
            </button>
          )}
        </div>

        <div>
          {counters.map((counter, index) => {
            console.log(counter);
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    const newCounter = [...counters];
                    newCounter[index] = newCounter[index] - 1;
                    setCounters(newCounter);
                  }}
                >
                  -
                </button>

                <span>{counter}</span>

                <button
                  onClick={() => {
                    const newCounter = [...counters];
                    newCounter[index] = newCounter[index] + 1;
                    setCounters(newCounter);
                  }}
                >
                  +
                </button>
                <div>
                  <button
                    onClick={() => {
                      const newCounter = [...counters];
                      newCounter[index] = 0;
                      setCounters(newCounter);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
