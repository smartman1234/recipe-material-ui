import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  gridItem: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "center",
    cursor: "pointer",
  },
}));

function Landing() {
  const classes = useStyles();
  const history = useHistory();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = (
        await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        )
      ).data;
      setCategories(data.categories);
    };
    fetchCategories();
  }, []);

  function handleClick(category) {
    history.push(`category/${category}`);
  }
  if (!categories) {
    return <Spinner />;
  }

  return (
    <div>
      <Grid container spacing={1}>
        {categories &&
          categories.map((cat) => {
            return (
              <Grid
                item
                md={4}
                sm={6}
                xs={12}
                key={cat.idCategory}
                onClick={() => {
                  handleClick(cat.strCategory);
                }}
                className={classes.gridItem}
              >
                <img src={cat.strCategoryThumb} alt={cat.strCategory} />
                <Typography align="center" variant="h4" gutterBottom>
                  {cat.strCategory}
                </Typography>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}

export default Landing;
