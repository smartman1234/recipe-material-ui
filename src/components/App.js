import "./App.css";
import Landing from "./Landing";
import { Switch, Route } from "react-router-dom";
import Category from "./Category";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
import SearchRecipe from "./SearchRecipe";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/category/:id" exact>
          <Category />
        </Route>
        <Route path="/recipe/:id" exact>
          <Recipe />
        </Route>
        <Route path="/search/:query" exact>
          <SearchRecipe />
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
