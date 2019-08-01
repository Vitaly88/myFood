export function searchFood(searchValue) {
  return fetch(
    `https://api.edamam.com/search?q=${searchValue}&app_id="0da1dcbc"&app_key="fd852335fd5a122fdd1ffb2094eed398	—"
&from=0&to=5`
  )
    .then(res => res.json())
    .then(result => {
      const dishes = result.hits.map(dish => {
        return {
          name: dish.recipe.label,
          imageSrc: dish.recipe.image,
          diet: dish.recipe.dietLabels
        };
      });
      return dishes;
    });
}
