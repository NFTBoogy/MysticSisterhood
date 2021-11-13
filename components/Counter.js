import React from "react";
import Countdown, { zeroPad } from "react-countdown";

const Completionist = () => <span>Time to mint!</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div
        style={{
          color: "rgba(255, 255, 255, 0.75)",
          width: "80%",
          textAlign: "center",
          marginTop: "1rem",
          fontFamily: "Adelle",
          fontSize: "3rem",
          letterSpacing: "0.2rem",
          alignItems: "center",
          justifyContent: "center",
          display: "grid",
        }}
      >
        <span
          style={{
            border: "3px solid rgba(255, 255, 255, 0.3)",
            padding: ".8rem",
            borderRadius: "10px",
          }}
        >
          {zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </span>
      </div>
    );
  }
};

const Counter = (props) => {
  return <Countdown date={"2022-01-17T05:51:00"} renderer={renderer} />;
};

export default Counter;
