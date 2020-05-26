import React, { Component, Fragment } from 'react';
import actions from '../services/index'

class SignUp extends Component {
    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit =  e => {
        e.preventDefault()
            actions.signUp(this.state).then(user=> {
                console.log(user.data)
                this.props.setUser({...user.data})  
            })
            .catch(({ response }) => {
                alert('User already exists!')
                console.log(response.data)
                console.error(response.data)
            });
    }
    render() {
        return (
            <Fragment>
                <h2>SignUP</h2>
                <form onSubmit={this.handleSubmit}>
                    <input className="signUpForm" placeholder = "email" name="email" type="email" onChange={this.handleChange} />
                    <input className="signUpForm" placeholder = "password" name="password" type="password" onChange={this.handleChange} />
                    <input type="submit" value="Sign Up"/>
                </form>
            </Fragment>
        );
    }
}

export default SignUp;