import React from "react";
import { useHistory } from "react-router-dom";

function RecipeCard({ recipe }) {
  const history = useHistory();
  return (
    <div
      key={recipe.idMeal}
      className="clickable"
      onClick={() => {
        history.push(`/recipe/${recipe.idMeal}`);
      }}
    >
      <img src={recipe.strMealThumb + "/preview"} alt={recipe.strMeal} />
      <h2>{recipe.strMeal}</h2>
    </div>
  );
}

export default RecipeCard;
