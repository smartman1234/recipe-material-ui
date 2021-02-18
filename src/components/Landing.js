import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function Landing() {
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

  console.log(categories);

  return (
    <div className="App">
      <h1>Categories</h1>
      {categories &&
        categories.map((cat) => {
          return (
            <div key={cat.idCategory}>
              <img src={cat.strCategoryThumb} alt={cat.strCategory} />
              <h2>{cat.strCategory}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default Landing;
