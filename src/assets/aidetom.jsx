const [counters, setCounters] = useState([4, 5]);
return (
  <div>
    My Custom Counter
    <div>
      {counters.map((counter) => {
        <div>
          <button>-</button>
          <p>{counter}</p>
          <button>+</button>
        </div>;
      })}
    </div>
  </div>
);
