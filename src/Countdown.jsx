import React from "react";

const Countdown = props => (
  <div className="countdown">
    <strong>{props.name}</strong> - {props.time}
  </div>
);

export default Countdown;
