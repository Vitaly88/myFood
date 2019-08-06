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
          ingredients: dish.strIngredient
        };
      });
      return dishes;
    });
}
