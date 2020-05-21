import React, { Component } from "react";
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Axios from "axios";

class IndividualResult extends Component {
    state = {
        location : {}
    }

componentDidMount = () => {
    Axios.get(`http://localhost:5000/journalEntry/${this.props.match.params.id}`)
    .then((res) => {
        console.log(res.data.journal)
        this.setState({
            location : res.data.journal
        })
    })
}

  render() {
    console.log(this.state);
    let id = this.props.match.params.id;
    console.log(id)
    
    return (
      <div>
        <Link className="link-navBar" to="/Menu">
          {" "}
          <Button className="btn-navBar" color="primary">
            {" "}
            Menu{" "}
          </Button>{" "}
        </Link>
        <h2> {this.state.location.location} </h2>
        <h4> Rating: {this.state.location.rating}</h4>
        <h4> {this.state.location.city}, {this.state.location.country} </h4>
        <p> {this.state.location.review} </p>
        
      </div>
    );
  }
}

export default IndividualResult;
