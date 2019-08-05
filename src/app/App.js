import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MealPlanner from "../pages/MealPlanner";
import GetIdeas from "../pages/GetIdeas";
import { getMealsFromStorage, setMealsToStorage } from "../utils/storage";

function App() {
  const [meals, setMeals] = React.useState(getMealsFromStorage());

  React.useEffect(() => {
    setMealsToStorage(meals);
  }, [meals]);

  function handleMealSelect(meal) {
    setMeals([...meals, meal]);
  }

  return (
    <div>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <GetIdeas onMealSelect={handleMealSelect} {...props} />
            )}
          />
          <Route
            path="/planner"
            render={props => <MealPlanner meals={meals} {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
