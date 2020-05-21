import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import actions from "./services/index";
import Axios from "axios";

class SearchResults extends Component {
  state = {
    locations: [],
  };

  componentDidMount = () => {
    Axios.get("http://localhost:5000/journalEntry").then((res) =>
      this.setState({ locations: res.data.journal })
    );
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
    return (
      <div>
      
      <Link className="link-navBar" to="/Menu">
          {" "}
          <Button className="btn-back" color="danger">
            {" "}
            Back{" "}
          </Button>{" "}
        </Link>
      <div><section className="searchResultsContainer">{this.listResult()}</section> </div>
      </div>
    );
  }
}

export default SearchResults;
