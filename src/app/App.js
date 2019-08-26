import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MealPlanner from "../pages/MealPlanner";
import GetIdeas from "../pages/GetIdeas";
import {
  getMealsFromStorage,
  setMealsToStorage,
  setFavoritesToStorage,
  getFavoritesFromStorage
} from "../utils/storage";
import GroceryList from "../pages/GroceryList";
import Recipe from "../pages/Recipe";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Favorites from "../pages/Favorites";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const Grid = styled.div`
  display: grid;
  position: fixed;
  grid-template-rows: 115px auto 60px;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  overflow: auto;
`;

function App() {
  const [meals, setMeals] = React.useState(getMealsFromStorage());
  const [favorites, setFavorites] = React.useState(getFavoritesFromStorage());

  const handleMealDelete = id => {
    const filteredItems = meals.filter(item => item._id !== id);
    setMeals(filteredItems);
  };

  const handleFavDelete = id => {
    const filteredItems = favorites.filter(item => item._id !== id);
    setFavorites(filteredItems);
  };

  React.useEffect(() => {
    setMealsToStorage(meals);
  }, [meals]);

  function handleMealSelect(meal) {
    setMeals([...meals, meal]);
  }

  React.useEffect(() => {
    setFavoritesToStorage(favorites);
  }, [favorites]);

  function handleFavoriteSelect(favorite) {
    const index = favorites.findIndex(item => item.mealId === favorite.mealId);

    if (index === -1) {
      setFavorites([...favorites, favorite]);
    } else {
      return favorites;
    }
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
                render={() => (
                  <GetIdeas
                    onFavSelect={handleFavoriteSelect}
                    onMealSelect={handleMealSelect}
                    meals={meals}
                  />
                )}
              />
              <Route
                path="/planner"
                render={props => (
                  <MealPlanner
                    meals={meals}
                    onMealDelete={handleMealDelete}
                    {...props}
                  />
                )}
              />
              <Route
                path="/grocery"
                render={props => <GroceryList meals={meals} {...props} />}
              />
              <Route
                path="/recipe/:id"
                render={props => (
                  <Recipe
                    onFavSelect={handleFavoriteSelect}
                    onMealSelect={handleMealSelect}
                    meals={meals}
                    {...props}
                  />
                )}
              />
              <Route
                path="/favorites"
                render={props => (
                  <Favorites
                    favorites={favorites}
                    onMealDelete={handleFavDelete}
                    component={Favorites}
                    {...props}
                  />
                )}
              />
              <Route path="/settings" component={Settings} />
              <Route component={NotFound} />
            </Switch>
          </Content>
          <Footer />
        </Grid>
      </Router>
    </>
  );
}

export default App;
