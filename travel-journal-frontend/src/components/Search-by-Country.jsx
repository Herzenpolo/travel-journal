import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class SearchByCountry extends Component {
  state = {
      country : '',
  }
  
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ country: e.target.value });
  };


    render() {
        console.log(this.state)
    return (
      <div className="searchByCountry">
        <Link className="link-navBar" to="/">
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
            name="country"
            placeholder="country"
            onChange={this.onChange}
          />
          <Link to={`/SearchResults/country=${this.state.country}`}>
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

export default SearchByCountry;
