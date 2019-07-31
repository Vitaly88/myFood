import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MealPlanner from "../pages/MealPlanner";
import GetIdeas from "../pages/GetIdeas";

function App() {
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={GetIdeas} />
          <Route path="/planner" component={MealPlanner} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
