import React from "react";

import Countdown from "./Countdown";

const App = () => (
  <div>
    <Countdown name="śniadanie" time="07:00" />
    <Countdown name="obiad" time="15:00" />
  </div>
);

export default App;
