import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
    marginTop: theme.spacing(5),
  },
  media: {
    height: 140,
  },
}));

function RecipeCard({ recipe }) {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid item md={4} sm={6} xs={12}>
      <Card
        className={classes.root}
        onClick={() => {
          history.push(`/recipe/${recipe.idMeal}`);
        }}
        elevation={1}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={recipe.strMealThumb + "/preview"}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {recipe.strMeal}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default RecipeCard;
