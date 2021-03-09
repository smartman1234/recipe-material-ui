import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainImage: {
    width: "100%",
  },
  ingredientImage: {
    width: "100%",
  },
}));

function Recipe() {
  const classes = useStyles();
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
          <Grid item xs={4} key={i}>
            <img
              className={classes.ingredientImage}
              src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
              alt={ingredient}
            />

            <Typography align="center" variant="h5" gutterBottom>
              {ingredient}
            </Typography>
            <Typography align="center" variant="subtitle2" gutterBottom>
              {measurement}
            </Typography>
          </Grid>
        );
      }
    }
    return recipeArr;
  };

  if (!recipe) {
    return <h1>Loading!</h1>;
  }

  return (
    <>
      <Typography variant="h2" gutterBottom>
        {recipe.strMeal}
      </Typography>
      <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
          <img
            className={classes.mainImage}
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h3" gutterBottom>
            Ingredients
          </Typography>
          <Grid container spacing={1}>
            {renderIngredients()}
          </Grid>
        </Grid>

        <Typography variant="body1" gutterBottom>
          {recipe.strInstructions}
        </Typography>
      </Grid>
    </>
  );
}

export default Recipe;
