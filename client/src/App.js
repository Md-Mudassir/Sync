import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Create from "./Components/Create.component";
import Index from "./Components/Index.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          {/* Navigation bar */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              Sync
            </Link>

            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/index"} className="nav-link">
                  Index
                </Link>
              </li>
            </ul>
          </nav>{" "}
          <br />
          <Switch>
            {/* Switches the page on click */}
            <Route exact path="/" component={Create} />
            <Route path="/index" component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
