import React, { Component } from "react";
import Axios from "axios";
import { Button } from "reactstrap";
import actions from "./services/index";

class IndividualResult extends Component {
  state = {
    location: {},
    edit: false,
  };

  componentDidMount = () => {
    Axios.get(
      `https://travel-journal-db.herokuapp.com/journalEntry/${this.props.match.params.id}`
    ).then((res) => {
      console.log(res.data.journal);
      this.setState({
        location: res.data.journal,
      });
    });
  };

  dbPost = async () => {
    this.setState({edit : !this.state.edit})
    // alert(`${this.state.location} has been added to the updated`);
    // let res = await actions.postToDb(this.state);
    // console.log(res);
  };

  onClickEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  onChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onClick = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state);
    let id = this.props.match.params.id;
    console.log(id);

    return (
      <div>
        {this.state.edit === true ? (
          <form className="journalEntryForm">
            <input
              type="text"
              className="journalEntryInput"
              name="location"
              onChange={this.onChange}
              value={this.state.location.location}
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
              value={this.state.location.city}
            />
            <input
              type="text"
              className="journalEntryInput"
              name="country"
              onChange={this.onChange}
              value={this.state.location.country}
            />
            <textarea
              className="journalEntryInput review"
              name="review"
              rows="5"
              columns="33"
              value={this.state.location.review}
              onChange={this.onChange}
            />
            <Button
              className="search-btn"
              color="primary"
              onClick={this.dbPost}
            >
              {" "}
              Save{" "}
            </Button>
          </form>
        ) : (
          <section className="indSearchRes">
            <section className = "img-container">
              <img
                className="home-img"
                src={this.state.location.pictureUrl}
                alt="japan"
              />
            </section>
            <section className="info-container">
              <h2> {this.state.location.location} </h2>
              <hr/>
              <h4> Rating: {this.state.location.rating}</h4>
              <h4>
                {" "}
                {this.state.location.city}, {this.state.location.country}{" "}
              </h4>
              <p> {this.state.location.review} </p>
              <Button onClick = {this.onClickEdit} color="primary"> Edit </Button>
            </section>
          </section>
        )}
      </div>
    );
  }
}

export default IndividualResult;
