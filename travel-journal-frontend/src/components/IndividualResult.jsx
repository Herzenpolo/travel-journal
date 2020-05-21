import React, { Component } from "react";
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'

class IndividualResult extends Component {
  render() {
    console.log(this.props.match.params);
    let city = this.props.match.params.id;
    let location = this.props.match.params.location;
    return (
      <div>
        <Link className="link-navBar" to="/Menu">
          {" "}
          <Button className="btn-navBar" color="primary">
            {" "}
            Menu{" "}
          </Button>{" "}
        </Link>
        <h1>{city}</h1>
        <h2>{location}</h2>
      </div>
    );
  }
}

export default IndividualResult;
