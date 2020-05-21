import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  onClick = (e) => console.log(e.target);
  state = {
    country : '',
}

onChange = (e) => {
  console.log(e.target.value);
  this.setState({ country: e.target.value });
};

  render() {
    return (
      <div>
        <img className="home-img" src="images/IMG_2103.jpeg" alt="japan" />
        <div className="homeLink">
          {" "}
          <Link className="homeLinkJournal" to="/JournalEntry">
            <button className="homeJournal" onClick={this.onClick}>
              Add a Place
            </button>
          </Link>
          <form className="search-form">
          <input
            className="search-field"
            type="text"
            name="country"
            placeholder="Search a Place"
            onChange={this.onChange}
          />
          <Link to={`/SearchResults/${this.state.country}`}>
            <Button className="search-btn" type="search" color="primary">
              {" "}
              Search!{" "}
            </Button>
          </Link>
        </form>
        </div>
      </div>
    );
  }
}

export default Home;
