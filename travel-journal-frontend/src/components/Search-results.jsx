import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import actions from './services/index'
import Axios from "axios"


class SearchResults extends Component {

state = {
  locations : []
}


  render() {
    console.log(this.props.match.params);
    return (
      <div>
        <Link className="link-navBar" to="/Menu">
          {" "}
          <Button className="btn-back" color="danger">
            {" "}
            Back{" "}
          </Button>{" "}
        </Link>
      </div>
    );
  }
}

export default SearchResults;
