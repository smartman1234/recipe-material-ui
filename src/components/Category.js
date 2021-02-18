import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

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
        recipies.map((r) => (
          <div key={r.idMeal}>
            <img src={r.strMealThumb + "/preview"} alt={r.strMeal} />
            <h2>{r.strMeal}</h2>
          </div>
        ))}
    </div>
  );
}

export default Category;
