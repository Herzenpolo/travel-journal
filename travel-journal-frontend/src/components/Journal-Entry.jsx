import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import actions from "./services/index";
import service from "../components/services/handleUpload";

class JournalEntry extends Component {
  state = {
    city: "",
    country: "",
    location: "",
    review: "",
    rating: 0,
    visitDate: "",
    pictureUrl: "",
  };

  dbPost = async () => {
    alert(`${this.state.location} has been added to the database`);
    let res = await actions.postToDb(this.state);
    console.log(res);
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

  // testing file upload

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // this method handles just the file upload
  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .handleUpload(uploadData)
      .then((response) => {
        console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ pictureUrl: response.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
  };

  // this method submits the form
  handleSubmit = (e) => {
    e.preventDefault();

    service
      .saveNewThing(this.state)
      .then((res) => {
        console.log("added: ", res);
        // here you would redirect to some other page
      })
      .catch((err) => {
        console.log("Error while adding the thing: ", err);
      });
  };

  //end testing file upload

  render() {
    console.log(this.state);
    {if (this.props.email) {
    return (
      <div>
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
            placeholder="Place or Experience"
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
          <div className="date-div">
            <input
              className="date-picker"
              type="date"
              id="visitDate"
              name="visitDate"
              min="2020-01-01"
              max="2030-12-31"
              onChange={this.onChange}
            />
          </div>
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

          <input type="file" onChange={(e) => this.handleFileUpload(e)} />

          <Link to={`/`}>
            <Button
              className="search-btn"
              type="search"
              color="primary"
              onClick={this.dbPost}
            >
              {" "}
              Submit!{" "}
            </Button>
          </Link>
        </form>
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

export default JournalEntry;
