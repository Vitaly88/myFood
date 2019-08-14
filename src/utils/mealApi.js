const dummy = new Array(20).fill("");
export function searchFood(searchValue) {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
  )
    .then(res => res.json())
    .then(result => {
      const dishes = result.meals.map(dish => {
        return {
          mealId: dish.idMeal,
          name: dish.strMeal,
          imageSrc: dish.strMealThumb,
          diet: dish.strArea,
          recipe: dish.strInstructions,
          ingredients: dummy
            .map((_, index) => dish[`strIngredient${index}`])
            .filter(Boolean),
          measure: dummy
            .map((_, index) => dish[`strMeasure${index}`])
            .filter(Boolean)
        };
      });
      return dishes;
    });
}

export function getMeal(id) {
  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
    .then(result => {
      return {
        mealId: result.meals[0].idMeal,
        name: result.meals[0].strMeal,
        imageSrc: result.meals[0].strMealThumb,
        diet: result.meals[0].strArea,
        recipe: result.meals[0].strInstructions,
        ingredients: dummy
          .map((_, index) => result.meals[0][`strIngredient${index}`])
          .filter(Boolean),
        measure: dummy
          .map((_, index) => result.meals[0][`strMeasure${index}`])
          .filter(Boolean)
      };
    });
}

export function getCategory(searchValue) {
  return fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchValue}`
  )
    .then(res => res.json())
    .then(result => {
      const dishes = result.meals.map(dish => {
        return {
          mealId: dish.idMeal,
          name: dish.strMeal,
          imageSrc: dish.strMealThumb
        };
      });
      return dishes;
    });
}

// [
//   {
//     ingredient: dummy.map((_, index) => dish[`strIngredient${index}`]),
//     measure: dummy.map((_, index) => dish[`strMeasure${index}`])
//   }
// ].filter(elem => elem !== "");
