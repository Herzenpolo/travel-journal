import React, { Component } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";


class Home extends Component {
  onClick = (e) => console.log(e.target);
  state = {
    country : '',
    user: '',
    imageUrl: ''
}

componentDidMount = () => {
  let images = ['images/picture1.jpeg','images/picture2.jpeg','images/picture3.jpeg','images/picture4.jpeg','images/picture5.jpeg','images/picture6.jpeg','images/picture7.jpeg','images/picture8.jpeg','images/picture9.jpeg']
  this.setState({imageUrl : images[Math.floor(Math.random()*images.length)]})
}

onChange = (e) => {
  e.preventDefault()
  console.log(e.target.value);
  this.setState({ country: e.target.value });
};

conditionalRender = () => {
  console.log(this.state, this.props)
  if (this.props.user) {
   return  (
    <div className="homeLink">
      {" "}
      <Link className="homeLinkJournal" to="/JournalEntry">
        <button className="homeJournal" onClick={this.onClick}>
          Add a Place
        </button>
      </Link>
      <form className="search-form">
      <input
        className="search-field"
        type="text"
        name="country"
        placeholder="Search a Place"
        onChange={this.onChange}
      />
      <Link to={`/SearchResults/${this.state.country}`}>
        <Button className="search-btn" type="search" color="primary">
          {" "}
          Search!{" "}
        </Button>
      </Link>
    </form>
    </div>
   )
  } else {
    return (
      <div className = 'login-container'>
        <Link to={`/log-in`}>
              <Button className="search-btn login-btn" type="search" color="primary">
                {" "}
                Oh! I have an Account!{" "}
              </Button>
        </Link>
        <Link to={`/sign-up`}>
              <Button className="search-btn sign-up-btn" type="search" color="danger">
                {" "}
                Let's make an Account!{" "}
              </Button>
        </Link>
      </div>

    ) 
    
  }
}

  render() {
    console.log(this.props.user)
    console.log(this.state)
    return (
      <div>
        <section className = "homeTitleContainer"><h1 className = "homeTitle">Travel Journal</h1></section>
        <div className = 'home-container'>
          <div className = "home-img-container"><img className="home-img" src={this.state.imageUrl} alt="japan" /></div>
          {this.conditionalRender()}
        </div>
      </div>
    );
  }
}

export default Home;
