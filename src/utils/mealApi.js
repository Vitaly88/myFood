export function searchFood(searchValue) {
  const dummy = new Array(20).fill("");

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
