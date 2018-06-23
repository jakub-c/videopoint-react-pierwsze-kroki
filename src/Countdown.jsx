import React from "react";
import PropTypes from "prop-types";

import "./Countdown.css";

const Countdown = props => (
  <div className="countdown">
    <strong>{props.name}</strong> - {props.time}
  </div>
);

Countdown.propTypes = {
  name: PropTypes.string,
  time: PropTypes.string
};

export default Countdown;
