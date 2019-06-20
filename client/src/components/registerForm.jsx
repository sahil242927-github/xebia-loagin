import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import history from "../history";
import users from "../apis/users";

class RegisterForm extends Form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: ""
    },
    errors: {}
  };

  schema = {
    firstname: Joi.string()
      .required()
      .label("Firstname"),
    lastname: Joi.string()
      .required()
      .label("Lastname"),
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    email: Joi.string()
      .email()
      .required()
      .label("Email")
  };

  doSubmit = async () => {
    // Call the server
    console.log(this.state);

    // creating user
    const response = await users.post("/users", this.state.data);
    console.log(response);
    history.push("/userlist");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("firstname", "Firstname")}
          {this.renderInput("lastname", "Lastname")}
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("email", "Email")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
