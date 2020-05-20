import React, { Component } from 'react';

class IndividualResult extends Component {
    render() {
        console.log(this.props.match.params)
        let city =  this.props.match.params.id
        let location = this.props.match.params.location
        return (
            <div>
                <h1>{city}</h1>
                <h2>{location}</h2>
            </div>
        );
    }
}

export default IndividualResult;