import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Productpage from "./pages/Productpage";
import CheckoutPage from './pages/CheckoutPage';
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/product" component={Productpage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
