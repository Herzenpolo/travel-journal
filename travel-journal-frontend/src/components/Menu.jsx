import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div>
      <Link className="link-navBar" to="/">
          {" "}
          <Button className="btn-back" color="danger">
            {" "}
            Back{" "}
          </Button>{" "}
        </Link>
      <img className = 'menu-img' src = 'images/IMG_2971.jpeg' alt = 'iceland' />
        <ButtonGroup vertical>
          <Link className="menu-btn menu-btn-first" to="/JournalEntry">
            <Button className = 'actual-btn'>Add New Journal Entry</Button>
          </Link>
          <Link className="menu-btn" to="/SearchByLocation">
            <Button className = 'actual-btn'>Search Location</Button>
          </Link>
          <Link className="menu-btn" to="/SearchByCountry">
            <Button className = 'actual-btn'>Search by Country</Button>
          </Link>
          <Link className="menu-btn menu-btn-last" to="/SearchByCity">
            <Button className = 'actual-btn'>Search by City</Button>
          </Link>
        </ButtonGroup>
        <img className = 'menu-img' src = 'images/IMG_2949.jpeg' alt = 'iceland' />
      </div>
    );
  }
}

export default Menu;
