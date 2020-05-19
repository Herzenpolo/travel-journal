import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class JournalEntry extends Component {
  render() {
    return (
      <div>
        <Link className="link-navBar" to="/Menu">
          {" "}
          <Button className="btn-navBar" color="primary">
            {" "}
            Menu{" "}
          </Button>{" "}
        </Link>
        <form>
            <input type = 'text' name = 'country' placeholder = 'Country'/>
            <input type = 'text' name = 'city' placeholder = 'City'/>
            <input type = 'text' name = 'location' placeholder = 'Location'/>
            <textArea name = 'review' rows = '5' columns = '33' placeholder = 'Review'/>
        </form>
      </div>
    );
  }
}

export default JournalEntry;
