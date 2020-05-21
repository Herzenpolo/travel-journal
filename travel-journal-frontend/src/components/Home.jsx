import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends Component {

onClick = (e) => console.log(e.target)

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
        <Link className = 'homeLinkJournal' to = "/JournalEntry"><button className = 'homeJournal' onClick = {this.onClick}>Journal Entry</button></Link>
      </div>
    );
  }
}

export default Home;
