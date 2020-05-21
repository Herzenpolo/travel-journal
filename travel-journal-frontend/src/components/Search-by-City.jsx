import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";


class SearchByCity extends Component {
  state = {
    city: "",
  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ city: e.target.value });
  };
  
  render() {
    console.log(this.state);
   
    return (
      <div className="searchByCity">
        <Link className="link-navBar" to="/Menu">
          {" "}
          <Button className="btn-back" color="danger">
            {" "}
            Back{" "}
          </Button>{" "}
        </Link>
        <form className="search-form">
          <input
            className="search-field"
            type="text"
            name="city"
            placeholder="city"
            onChange={this.onChange}
          />
          <Link to={`/SearchResults/${this.state.city}`}>
            <Button className="search-btn" type="serch" color="primary">
              {" "}
              Search!{" "}
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchByCity;
