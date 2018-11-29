import React, { Component } from "react";
import Button from "react-bootstrap/lib/Button";
import Form from "react-bootstrap/lib/Form";
import Auth from "../../Auth.js";
import "./login.css";

const auth = new Auth();

class Login extends Component {
  render() {
    return (
      <div className="content">
        <Button variant="primary" type="submit" onClick={auth.login}>
          Log In
        </Button>
      </div>
    );
  }
}

export default Login;
