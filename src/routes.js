import React from "react";
import { Route } from "react-router";

import App from "./components/app/App";
import ScoreBoard from "./components/scoreboard/ScoreBoard";

export default(
  <Route>
    <Route path="/" component={App}>
      <Route path="/scoreboard" component={ScoreBoard} />
    </Route>
  </Route>
)