import React from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios';

import './user.scss';
const spacer = { margin: 20 }

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',

        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.firstNameInputChangeHandler = this.firstNameInputChangeHandler.bind(this);
        this.lastNameInputChangeHandler = this.lastNameInputChangeHandler.bind(this);
        this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
        this.passwordInputChangeHandler = this.passwordInputChangeHandler.bind(this);
    }
    /**************************************ON SUBMIT***********************************************************/
    onSubmitHandler(e) {
        e.preventDefault();
        if (!(this.state.businessName ===  '' || this.state.businessType ===  '' || this.state.firstName ===  '' || this.state.lastName ===  '' || this.state.email ===  '' || this.state.password ===  '')
            && (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
            axios.post('https://www.vendorfinder.tk/api/signUp', {
            //axios.post('http://localhost:4000/api/signUp', {    
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }).then(res => {
                this.setState({
                    redirect: true
                });
                alert('Account Created. Thank you!');
            }).catch(err => {
                console.log(err);
                alert('Failed to create accout. Try again!');
            });

        } else {
            alert('Failed to create accout. Try again!');
        }
    }
    /************************************************ON CHANGE*******************************************************/

    firstNameInputChangeHandler(event) {
        this.setState({
            firstName: event.target.value
        });
    }

    lastNameInputChangeHandler(event) {
        this.setState({
            lastName: event.target.value
        });
    }

    emailInputChangeHandler(event) {
        this.setState({
            email: event.target.value
        });
    }

    passwordInputChangeHandler(event) {
        this.setState({
            password: event.target.value
        });
    }

    /*******************************************************************************************************/
    render() {
        if (this.state.redirect) return <Redirect to='/' />;
        return (
            <div className="user_SignUp">
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <h2>Register</h2>
                    <div style={spacer} />
                    <label htmlFor="first-name" >First Name:</label><br />
                    <input
                        id="first-name"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.firstNameInputChangeHandler}
                        required />
                    <div style={spacer} />
                    <label htmlFor="last-name" >Last Name:</label><br />
                    <input
                        id="last-name"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.lastNameInputChangeHandler}
                        required />
                    <div style={spacer} />
                    <label htmlFor="email" >Email:</label><br />
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="example@domain.com"
                        onChange={this.emailInputChangeHandler}
                        required />
                    <div style={spacer} />
                    <label htmlFor="password" >Password:</label><br />
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="********"
                        onChange={this.passwordInputChangeHandler}
                        required />
                    <div style={spacer} />
                    <button onClick={this.onSubmitHandler} className="userB_SignUp" type="button">Submit</button>
                         &ensp; &ensp;
                        <Link className="user_Withaccnt" to="/signIn">Sign In</Link>
                </form>
            </div>
        );
    }
}
export default SignUp;
