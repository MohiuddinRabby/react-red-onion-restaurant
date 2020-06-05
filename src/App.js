import React from "react";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Notfound from "./components/Notfound/Notfound";
import FoodDetails from "./components/FoodDetails/FoodDetails";
import CartReview from "./components/CartReview/CartReview";
//
import { toast } from 'react-toastify';

toast.configure({
 autoClose: 1000,
 draggable: false,
      
});
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/review/cart" component={CartReview} />
          <Route exact path="/food/details/:keys" component={FoodDetails}/>
          <Route path="*" component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
