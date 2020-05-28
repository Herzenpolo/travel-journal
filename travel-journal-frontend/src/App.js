import React, {Component, Fragment} from 'react';
import "./App.css";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import JournalEntry from "./components/Journal-Entry";
import SearchResults from "./components/Search-results";
import IndividualResult from "./components/IndividualResult";
import NotFound from "./components/404/NotFound";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import actions from "./components/services/index";

class App extends Component {
  state = {};

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });
    console.log("coolest ");
  }

  setUser = (user) => this.setState(user);

  logOut = async () => {
    let res = await actions.logOut();
    this.setUser({ email: null, createdAt: null, updatedAt: null, _id: null }); //FIX
  };

  render() {
    console.log(this.state.email)
    return (
      <div>
        <nav>
          {this.state.email ? (
            <Fragment>
              <NavLink className = "Nav-Btn" onClick={this.logOut} to="/">
                Log Out 
              </NavLink>
            </Fragment>
          ) : (
            <Fragment>
             <section className = "nav-bar">
                <NavLink className = "Nav-Btn" to="/sign-up">Sign Up</NavLink>
                <NavLink className = "Nav-Btn" to="/log-in">Log In</NavLink>
             </section>
            </Fragment>
          )}
        </nav>

        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} user = {this.state.email} />} />
          <Route
            exact
            path="/JournalEntry"
            render={(props) => <JournalEntry {...props} />}
          />
          <Route
            exact
            path="/SearchResults/:searchInput"
            render={(props) => <SearchResults {...props} />}
          />
          <Route
            exact
            path="/individualResult/:id"
            render={(props) => <IndividualResult {...props} />}
          />
          <Route
            exact
            path="/sign-up"
            render={(props) => <SignUp {...props} setUser={this.setUser} />}
          />
          <Route
            exact
            path="/log-in"
            render={(props) => <Login {...props} setUser={this.setUser} email = {this.state.email} />}
          />
          <Route component={NotFound} />
        </Switch>
        <footer className="footerLinks">
          <Link className="footerlink-container" to="/">
            <img className="footer-icons" src="images/icons8-home-50.png" alt="home" />
          </Link>
          <a className="footerlink-container" href="https://www.instagram.com/">
            <img
              className="footer-icons"
              src="images/icons8-instagram-52.png"
              alt="instagram"
            />
          </a>
          <a
            className="footerlink-container"
            href="https://www.tripadvisor.com/"
          >
            <img
              className="footer-icons"
              src="images/48942.svg"
              alt="Trip Advisor"
            />
          </a>
        </footer>
      </div>
    );
  }
}
export default App;
