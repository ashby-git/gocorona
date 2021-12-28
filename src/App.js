import React from "react";
import Download from "./components/download/download.component";
import Home from "./pages/pages";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/download" component={Download} exact />
      </Switch>
    </Router>
  );
}

export default App;
