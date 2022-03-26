import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  let [time, setTime] = useState(now);

  function newTime() {
    let aNewTime = new Date().toLocaleTimeString();
    setTime(aNewTime);
  }
  setInterval(newTime, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={newTime}>Get Time</button>
    </div>
  );
}

export default App;
