// Timer.js
import { useState } from "react";
import Button from "./Button";

function Timer() {
  const [regex, setRegex] = useState();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setRegex(value);
  };

  return (
    <div className="box">
      <input value={regex} onChange={handleChange} placeholder="Enter your number" />
      <Button value={regex} />
    </div>
  );
}

export default Timer;
