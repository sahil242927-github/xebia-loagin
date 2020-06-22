import React, { Component } from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import UserList from "./components/UserList";
import RegisterForm from "./components/registerForm";
import history from "./history";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Fragment>
          <NavBar />
          <main className="App-container">
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/userlist" component={UserList} />
              <Route path="/not-found" component={NotFound} />
              <Redirect from="/" exact to="/userlist" />
              <Redirect to="/not-found" />
            </Switch>
          </main>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
