export function getMealsFromStorage() {
  try {
    const data = JSON.parse(localStorage.getItem("meals")); //wandelt in S
    return data || [];
  } catch (error) {
    return [];
  }
}

export function setMealsToStorage(meals) {
  localStorage.setItem("meals", JSON.stringify(meals));
}
