import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class SearchByLocation extends Component {
state = {
    country : '',
    city : '',
    location : '',
}

setInput = (e) => this.setState({[e.target.name] : e.target.value})

  render() {
      console.log(this.state)
    return (
      <div>
        {/* <Link className="link-navBar" to="/Menu">
          {" "}
          <Button className="btn-navBar" color="primary">
            {" "}
            Menu{" "}
          </Button>{" "}
        </Link> */}
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
            placeholder="Country"
            onChange={this.setInput}
          />
          <input
            className="search-field"
            type="text"
            name="city"
            placeholder="City"
            onChange={this.setInput}
          />
          <input
            className="search-field"
            type="text"
            name="location"
            placeholder="Location"
            onChange={this.setInput}
          />
          <Link to={`/SearchResults/${this.state.location}`}>
            <Button className="search-btn" type="search" color="primary">
              {" "}
              Search!{" "}
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default SearchByLocation;
