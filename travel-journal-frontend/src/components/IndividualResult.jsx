import React, { Component } from "react";
import Axios from "axios";
import { Button } from "reactstrap";
import actions from "./services/index";
import { Link } from 'react-router-dom'

class IndividualResult extends Component {
  state = {
    location: '',
    city: '',
    country: '',
    review: '',
    rating: 0,
    pictureUrl: '',
    edit: false,
  };

  componentDidMount = () => {
    Axios.get(
      `https://travel-journal-db.herokuapp.com/journalEntry/${this.props.match.params.id}`
    ).then((res) => {
      console.log(res.data.journal.pictureUrl);
      this.setState({
        _id : res.data.journal._id,
        location: res.data.journal.location,
        city: res.data.journal.city,
        country: res.data.journal.country,
        review: res.data.journal.review,
        rating: res.data.journal.rating,
        visitDate: res.data.journal.visitDate,
        pictureUrl: res.data.journal.pictureUrl ? res.data.journal.pictureUrl : '/images/default-image.png',
      });
    });
  };

  updateDb = async () => {
    this.setState({edit : !this.state.edit})
    alert(`${this.state.location} has been updated`);
    let res = await actions.updateDb(this.state);
    console.log(res);
  };

  onClickEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    {if (this.props.email) {
    return (
      <div>
        {this.state.edit === true ? (
          <form className="journalEntryForm">
            <input
              type="text"
              className="journalEntryInput"
              name="location"
              onChange={this.onChange}
              placeholder={this.state.location}
            />
            <div className="star-rating">
              {" "}
              <p className="rating-title">Rating:</p>
              <button
                className="starRating star1"
                name="rating"
                value="1"
                onClick={this.onClick}
              >
                ☆
              </button>
              <button
                className="starRating star2"
                name="rating"
                value="2"
                onClick={this.onClick}
              >
                ☆
              </button>
              <button
                className="starRating star3"
                name="rating"
                value="3"
                onClick={this.onClick}
              >
                ☆
              </button>
              <button
                className="starRating star4"
                name="rating"
                value="4"
                onClick={this.onClick}
              >
                ☆
              </button>
              <button
                className="starRating star5"
                name="rating"
                value="5"
                onClick={this.onClick}
              >
                ☆
              </button>
            </div>
            <input
              type="text"
              className="journalEntryInput"
              name="city"
              onChange={this.onChange}
              placeholder={this.state.city}
            />
            <input
              type="text"
              className="journalEntryInput"
              name="country"
              onChange={this.onChange}
              placeholder={this.state.country}
            />
            <textarea
              className="journalEntryInput review"
              name="review"
              rows="5"
              columns="33"
              placeholder={this.state.review}
              onChange={this.onChange}
            />
            <Button
              className="search-btn"
              color="primary"
              onClick={this.updateDb}
            >
              {" "}
              Save{" "}
            </Button>
          </form>
        ) : (
          <section className="indSearchRes">
            <section className = "img-container">
              <img
              className = "indRes-image"
                src={this.state.pictureUrl}
                alt="japan"
              />
            </section>
            <section className="info-container">
              <h2> {this.state.location} </h2>
              <hr/>
              <h4> Rating: {this.state.rating}</h4>
              <h4>
                {" "}
                {this.state.city} {this.state.country}{" "}
              </h4>
              <p> {this.state.review} </p>
              <Button onClick = {this.onClickEdit} color="primary"> Edit </Button>
            </section>
          </section>
        )}
      </div>
    );
        } else {
          return (
            <div className = "not-logged-in">
              <h1>WHOOPS!</h1>
              <p>Looks like you're not signed in, please head to our Sign in page!</p>
              <Link to={`/`}>
                  <Button
                    className="search-btn"
                    type="search"
                    color="primary"
                    
                  >
                    {" "}
                    Home!{" "}
                  </Button>
                </Link>
            </div>
          )
        }
  }
}
}

export default IndividualResult;
