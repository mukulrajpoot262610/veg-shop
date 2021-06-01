import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Productpage from "./pages/Productpage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/product" component={Productpage} />
      </Switch>
    </Router>
  );
}

export default App;
