export function getMealsFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem("meals"));
    return data || [];
  } catch (error) {
    return [];
  }
}

export function setMealsToStorage(meals) {
  localStorage.setItem("meals", JSON.stringify(meals));
}

export function getFavoritesFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem("favorites"));
    return data || [];
  } catch (error) {
    return [];
  }
}

export function setFavoritesToStorage(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
