import React, { Component } from "react";
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import Axios from "axios";

class IndividualResult extends Component {
    state = {
        location : {}
    }

componentDidMount = () => {
    Axios.get(`https://travel-journal-db.herokuapp.com/journalEntry/${this.props.match.params.id}`)
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
        
        <section className = 'indSearchRes'>
        <img className="home-img" src={this.state.location.pictureUrl} alt="japan" />
          <h2> {this.state.location.location} </h2>
          <hr/>
          <h4> Rating: {this.state.location.rating}</h4>
          <h4> {this.state.location.city}, {this.state.location.country} </h4>
          <p> {this.state.location.review} </p>
        </section>
        
      </div>
    );
  }
}

export default IndividualResult;
