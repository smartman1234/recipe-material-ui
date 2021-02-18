import "./App.css";
import Landing from "./Landing";
import { Switch, Route } from "react-router-dom";
import Category from "./Category";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="/category/:id" exact>
          <Category />
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
