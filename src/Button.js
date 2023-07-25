// Button.js
import { useState, useEffect } from "react";

function Button(props) {
  const initialSeconds = props.value || 0;

  const [count, setCount] = useState(initialSeconds);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      }
    }, 1000);

    // Clean up the interval when the countdown reaches 0 or the component unmounts
    return () => clearInterval(countdownInterval);
  }, [count]);

  // Reset the countdown to the initial value
  function handleReset() {
    setCount(initialSeconds);
  }

  return (
    <>
      <button className="btn" onClick={handleReset}>
        Reset Countdown
      </button>
      <h1>Countdown: {count} seconds</h1>
    </>
  );
}

export default Button;
