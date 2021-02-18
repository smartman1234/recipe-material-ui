import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      console.log(resp);
      setRecipe(resp.data.meals[0]);
    };
    getData();
  }, [id]);

  const renderIngredients = () => {
    const recipeArr = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measurement = recipe[`strMeasure${i}`];
      if (ingredient) {
        recipeArr.push(
          <div key={i}>
            <img
              src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
              alt={ingredient}
            />
            <p>{ingredient}</p>
            <p>{measurement}</p>
          </div>
        );
      }
    }
    return recipeArr;
  };

  if (!recipe) {
    return <h1>Loading!</h1>;
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h2>Ingredients</h2>
      {renderIngredients()}
      <h3>{recipe.strInstructions}</h3>
    </div>
  );
}

export default Recipe;
