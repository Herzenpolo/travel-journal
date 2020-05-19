import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Link className="link-navBar" to="Menu">
          {" "}
          <Button className="btn-navBar" color="primary">
            {" "}
            Menu{" "}
          </Button>{" "}
        </Link>
      </div>
    );
  }
}

export default Home;
