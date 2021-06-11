import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Signin from "./pages/Signin";
import Productpage from "./pages/Productpage";
// STEP 2
import { auth } from './firebase/firebase'
import { useEffect, useState } from "react";

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  let unsubscribeFromAuth = null

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(currentUser)
    })

    return () => {
      unsubscribeFromAuth();
    }
  }, [currentUser])

  return (
    <Router>
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} currentUser={currentUser} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/product" component={Productpage} />
      </Switch>
    </Router>
  );
}

export default App;
