import React, { Component, Fragment } from 'react';
import actions from '../services/index'

class SignUp extends Component {
    state = {

    } 
    handleChange = e => {
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit =  e => {
        e.preventDefault()
            actions.signUp(this.state).then(user=> {
                console.log(user.data)
                this.props.setUser({...user.data})
                alert('Your account has been created!')
            })
            .catch(({ response }) => {
                alert('User already exists!')
                console.log(response)
                console.error(response.data)
            });
    }
    render() {
        if (this.props.email) {
            //  return <Redirect to = "/"/>
            this.props.history.push('/')
            }
        return (
            <Fragment>
            <div className="login-form-container">
                <h2>SignUP</h2>
                <form className="loginForm" onSubmit={this.handleSubmit}>
                    <input className="signUpForm journalEntryInput" placeholder = "email" name="email" type="email" onChange={this.handleChange} />
                    <input className="signUpForm journalEntryInput" placeholder = "password" name="password" type="password" onChange={this.handleChange} />
                    <input  className="loginScreenBtn" type="submit" value="Sign Up"/>
                    {/* <input  className="loginScreenBtn" type="submit" value="Sign Up"/> */}
                </form>
                </div>
            </Fragment>
        );
    }
}

export default SignUp;