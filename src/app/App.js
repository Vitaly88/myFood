import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MealPlanner from "../pages/MealPlanner";
import GetIdeas from "../pages/GetIdeas";
import { getMealsFromStorage, setMealsToStorage } from "../utils/storage";
import GroceryList from "../pages/GroceryList";
import Recipe from "../pages/Recipe";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";

const Grid = styled.div`
  display: grid;
  position: fixed;
  grid-template-rows: 145px auto 60px;
  height: 100vh;
`;

const Content = styled.div`
  overflow: auto;
`;

function App() {
  const [meals, setMeals] = React.useState(getMealsFromStorage());

  React.useEffect(() => {
    setMealsToStorage(meals);
  }, [meals]);

  function handleMealSelect(meal) {
    setMeals([...meals, meal]);
  }

  return (
    <>
      <Router>
        <GlobalStyle />
        <Grid>
          <Header />
          <Content>
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
              <Route
                path="/grocery"
                render={props => <GroceryList meals={meals} {...props} />}
              />
              <Route
                path="/recipe/:id"
                render={props => <Recipe {...props} />}
              />
              <Route path="/favorites" component={Favorites} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </Content>
          <Footer />
        </Grid>
      </Router>
    </>
  );
}

export default App;
