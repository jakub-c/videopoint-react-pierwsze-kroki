import React from "react";
import PropTypes from "prop-types";
import { hourMinuteToSeconds, secondsToHourMinuteSecond } from "./utils";

import Overlay from "./Overlay";
import "./Countdown.css";
import "./../node_modules/semantic-ui-css/semantic.css";

const Countdown = props => {
  const eventInSeconds = hourMinuteToSeconds(props.hour, props.minute);
  const nowInSeconds =
    hourMinuteToSeconds(props.timeNow.hour, props.timeNow.minute) +
    props.timeNow.seconds;

  const diff = eventInSeconds - nowInSeconds;
  const diffText = diff > 0 ? secondsToHourMinuteSecond(diff) : "tomorrow";

  return (
    <div className="countdown">
      <strong>{props.name}</strong> - {diffText}
      <div className="countdown__icons">
        <i className="icon edit" onClick={() => props.onEditInit(props.id)} />
        <i className="icon times" onClick={() => props.onRemove(props.id)} />
      </div>
      <Overlay>
        <h1>{props.name}</h1>
        <p>
          {props.hour.toString().padStart(2, 0)}:{props.minute
            .toString()
            .padStart(2, 0)}
        </p>
      </Overlay>
    </div>
  );
};

Countdown.propTypes = {
  name: PropTypes.string,
  hour: PropTypes.number,
  minute: PropTypes.number,
  onEditInit: PropTypes.func,
  timeNow: PropTypes.shape({
    hour: PropTypes.number,
    minute: PropTypes.number,
    seconds: PropTypes.number
  }),
  onRemove: PropTypes.func
};

export default Countdown;
