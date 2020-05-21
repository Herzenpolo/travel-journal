import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  onClick = (e) => console.log(e.target);

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
        <img className="menu-img" src="images/IMG_2103.jpeg" alt="japan" />
        <div className="homeLink">
          {" "}
          <Link className="homeLinkJournal" to="/JournalEntry">
            <button className="homeJournal" onClick={this.onClick}>
              Journal Entry
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
