import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Axios from "axios";

class SearchResults extends Component {
  state = {
    locations: [],
  };

  componentDidMount = () => {
    Axios.get("https://travel-journal-db.herokuapp.com/journalEntry", {
      params: {
        searchInput: this.props.match.params.searchInput,
      },
    }).then((res) => this.setState({ locations: res.data.journal }));
  };

  listResult = () => {
    let newArr = [...this.state.locations];
    return newArr.map((eachLocation) => {
      return (
        <Link
          className="searchResultsLink"
          to={`/individualResult/${eachLocation._id}`}
          key={eachLocation._id}
        >
          <Button className="searchResultsButton">
            {" "}
            {eachLocation.location} | {eachLocation.rating}{" "}
          </Button>{" "}
        </Link>
      );
    });
  };

  render() {
    console.log(this.props.match.params);
    console.log(this.state);
    {
      if (this.props.email) {
        return (
          <div>
            <Link className="link-navBar" to="/">
              {" "}
              <Button className="stubbornBtn" color="danger">
                {" "}
                Back{" "}
              </Button>{" "}
            </Link>
            <div>
              <section className="searchResultsContainer">
                {this.listResult()}
              </section>{" "}
            </div>
          </div>
        );
      } else {
        return (
          <div className="not-logged-in">
            <h1>WHOOPS!</h1>
            <p>
              Looks like you're not signed in, please head to our Sign in page!
            </p>
            <Link to={`/`}>
              <Button className="search-btn" type="search" color="primary">
                {" "}
                Home!{" "}
              </Button>
            </Link>
          </div>
        );
      }
    }
  }
}

export default SearchResults;
