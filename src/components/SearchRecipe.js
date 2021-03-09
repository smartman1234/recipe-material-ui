import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";

import Grid from "@material-ui/core/Grid";

function SearchRecipe() {
  const { query } = useParams();
  const [recipies, setRecipies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setRecipies(resp.data.meals);
      setLoading(false);
    };
    getData();
  }, [query]);

  if (!recipies) {
    if (loading) {
      return <Spinner />;
    }
    return <h1>No results found!</h1>;
  }

  return (
    <Grid container spacing={1}>
      {recipies &&
        recipies.map((r) => <RecipeCard key={r.idMeal} recipe={r} />)}
    </Grid>
  );
}

export default SearchRecipe;
