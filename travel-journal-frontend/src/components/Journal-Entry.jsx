import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class JournalEntry extends Component {
  state = {
    city: "",
    country: "",
    location: "",
    review: "",
    rating: 0,
  };

  onChange = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = (e) => {
    e.preventDefault();
    this.setState({ rating: e.target.value });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Link className="link-navBar" to="/Menu">
          {" "}
          <Button className="btn-navBar" color="primary">
            {" "}
            Menu{" "}
          </Button>{" "}
        </Link>
        <form className="journalEntryForm">
          <input
            className="journalEntryInput"
            type="text"
            name="country"
            placeholder="Country"
            onChange={this.onChange}
          />
          <input
            className="journalEntryInput"
            type="text"
            name="city"
            placeholder="City"
            onChange={this.onChange}
          />
          <input
            className="journalEntryInput"
            type="text"
            name="location"
            placeholder="Location"
            onChange={this.onChange}
          />
          <textarea
            className="journalEntryInput review"
            name="review"
            rows="5"
            columns="33"
            placeholder="Review"
            onChange={this.onChange}
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
          <Link to={`/SearchResults/${this.state.city}/${this.state.location}`}>
            <Button className="search-btn" type="serch" color="primary">
              {" "}
              Submit!{" "}
            </Button>
          </Link>
        </form>
      </div>
    );
  }
}

export default JournalEntry;
