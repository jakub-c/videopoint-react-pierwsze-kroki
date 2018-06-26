import React from "react";
import PropTypes from "prop-types";

import "./Countdown.css";

const Countdown = props => (
  <div className="countdown">
    <strong>{props.name}</strong> - {props.hour}:{props.minute}
  </div>
);

Countdown.propTypes = {
  name: PropTypes.string,
  hour: PropTypes.string,
  minute: PropTypes.string
};

export default Countdown;
