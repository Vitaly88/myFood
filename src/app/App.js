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

const Grid = styled.div`
  display: grid;
  position: fixed;
  grid-template-rows: 145px auto 50px;
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
      <GlobalStyle />
      <Grid>
        <Header />
        <Content>
          <Router>
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
              <Route path="/grocery" component={GroceryList} />
              <Route path="/recipe" render={props => <Recipe {...props} />} />
            </Switch>
          </Router>
        </Content>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
