import React from "react";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Notfound from "./components/Notfound/Notfound";
import FoodDetails from "./components/FoodDetails/FoodDetails";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/food/details/:title" component={FoodDetails}/>
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
