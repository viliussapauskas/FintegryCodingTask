import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  useEffect(() => {
    var users = localStorage.getItem("users");

    if (!users) {
      localStorage.setItem("users", JSON.stringify([]));
    }
  }, []);
  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route exact path="/register/:id" component={RegisterPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
