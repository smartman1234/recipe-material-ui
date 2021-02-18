import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

function Category() {
  // const history = useHistory();
  const params = useParams();
  const catId = params.id;
  const [recipies, setRecipies] = useState(null);
  // console.log(history);
  useEffect(() => {
    const getData = async () => {
      const resp = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${catId}`
      );
      setRecipies(resp.data.meals);
    };
    getData();
  }, [catId]);
  console.log(params);
  return (
    <div>
      <h1>{catId}</h1>
      {recipies &&
        recipies.map((r) => <RecipeCard key={r.idMeal} recipe={r} />)}
    </div>
  );
}

export default Category;
