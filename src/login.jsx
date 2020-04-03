import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import * as EmailValidator from "email-validator";

class Login extends Component {
  state = { email: "", password: "" };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleEmail = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    return (
      <form className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          placeholder="Enter email"
          pattern="/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$/"
          title="Invalid Email"
          required
          onChange={this.handleEmail}
        ></input>

        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>

        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          required
          onChange={this.handlePassword}
        ></input>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Login;
