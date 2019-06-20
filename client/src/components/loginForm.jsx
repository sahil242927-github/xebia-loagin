import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import users from "../apis/users";
import history from "../history";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    loginStatus: true
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    const { username } = this.state.data;

    // Call the server
    const response = await users.get("/users");
    const userObj = response.data.find(user => {
      return user.username === username || user.email === username;
    });
    if (userObj) {
      history.push("/userlist");
    } else {
      this.state.loginStatus = false;
    }
  };
  renderLoginError = () => {
    if (this.state.loginStatus === false) {
      return (
        <div className="App-loginForm-notValild">
          Username or password is not valid!!
        </div>
      );
    }
  };
  render() {
    return (
      <div>
        <h1>Login</h1>
        {this.renderLoginError()}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
