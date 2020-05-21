import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import JournalEntry from "./components/Journal-Entry";
import Menu from "./components/Menu";
import SearchByCity from "./components/Search-by-City";
import SearchByCountry from "./components/Search-by-Country";
import SearchByLocation from "./components/Search-by-Location";
import SearchResults from "./components/Search-results";
import IndividualResult from "./components/IndividualResult"


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/JournalEntry"
            render={(props) => <JournalEntry {...props} />}
          />
          <Route exact path="/Menu" render={(props) => <Menu {...props} />} />
          <Route
            exact
            path="/SearchByCity"
            render={(props) => <SearchByCity {...props} />}
          />
          <Route
            exact
            path="/SearchByCountry"
            render={(props) => <SearchByCountry {...props} />}
          />
          <Route
            exact
            path="/SearchByLocation"
            render={(props) => <SearchByLocation {...props} />}
          />
          <Route
            exact
            path="/SearchByCity"
            render={(props) => <SearchByCity {...props} />}
          />
          <Route
            exact
            path="/SearchResults/:country"
            render={(props) => <SearchResults {...props} />}
          />
          <Route
            exact
            path="/SearchResults/:city"
            render={(props) => <SearchResults {...props} />}
          />
          <Route
            exact
            path="/SearchResults/:location"
            render={(props) => <SearchResults {...props} />}
          />
          <Route
            exact
            path="/SearchResults/:id/:location"
            render={(props) => <IndividualResult {...props} />}
          />
        </Switch>
        <footer className = 'footerLinks'>
          <Link className = 'footerlink-container' to="/">
            <img className = 'footer-icons' src= 'images/25694.svg' alt="home" />
          </Link>
          <a className = 'footerlink-container' href="https://www.instagram.com/">
            <img className = 'footer-icons' src='images/icons8-instagram-52.png' alt="instagram" />
          </a>
          <a className = 'footerlink-container' href="https://www.tripadvisor.com/">
            <img className = 'footer-icons' src= 'images/48942.svg' alt="Trip Advisor" />
          </a>
        </footer>
      </div>
    );
  }
}
export default App;
