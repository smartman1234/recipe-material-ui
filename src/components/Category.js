import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";

import { Grid, Typography } from "@material-ui/core";

function Category() {
  const params = useParams();
  const catId = params.id;
  const [recipies, setRecipies] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catId}`
      );
      setRecipies(resp.data.meals);
      setLoading(false);
    };
    getData();
  }, [catId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Typography align="center" variant="h4" gutterBottom>
        {`${catId} recipies`}
      </Typography>
      <Grid container spacing={1}>
        {recipies &&
          recipies.map((r) => <RecipeCard key={r.idMeal} recipe={r} />)}
      </Grid>
    </>
  );
}

export default Category;
