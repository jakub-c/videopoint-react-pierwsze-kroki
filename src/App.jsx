import React, { Component } from "react";

import Countdown from "./Countdown";

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [
        { id: 0, name: "śniadanie", time: "07:00" },
        { id: 1, name: "obiad", time: "15:00" }
      ]
    };
  }
  render() {
    return (
      <div>
        <Countdown name="śniadanie" time="07:00" />
        <Countdown name="obiad" time="15:00" />
      </div>
    );
  }
}

export default App;
