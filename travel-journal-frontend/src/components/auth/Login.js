import React, { Component, Fragment } from "react";
import actions from "../services/index";
import { useHistory } from "react-router-dom";

class LogIn extends Component {
  state = {};
  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    actions
      .logIn(this.state)
      .then((user) => {
        console.log(user.data);
        this.props.setUser({ ...user.data });
        alert(`All set! you can head home now!`);
      })
      .catch(({ response }) => {
        alert("Uh oh! Something is off, please try again");
        console.error(response.data);
        console.log(response);
      });
  };

  routeChange=()=> {
    let path = `/`;
    let history = useHistory();
    history.push(path);
  }


  render() {
    return (
      <Fragment>
        <div className="login-form-container">
          <h2>Sign in!</h2>
          <form className="loginForm" onSubmit={this.handleSubmit}>
            <input
              className="journalEntryInput"
              name="email"
              type="email"
              placeholder="email"
              onChange={this.handleChange}
            />
            <input
              className="journalEntryInput"
              name="password"
              type="password"
              placeholder="password"
              onChange={this.handleChange}
            />
            <input className="loginScreenBtn" type="submit" value="Log In"  onClick = {event =>  window.location.href='/'}/>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default LogIn;
