import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import './user.scss';
const spacer = { margin: 20 }

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            token: '',
            userId: '',
            redirect: localStorage.getItem('userTokenTime') ? true : false
        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
        this.passwordInputChangeHandler = this.passwordInputChangeHandler.bind(this);
    }
    /**************************************ON SUBMIT***********************************************************/
    onSubmitHandler() {
        if (!(this.state.email ===  '' || this.state.password ===  '')
            && (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
            axios.post('https://www.vendorfinder.tk/api/signIn', {
            //axios.post('http://localhost:4000/api/signIn', {  
            email: this.state.email,
                password: this.state.password
            }).then(res => {
                this.setState({
                    token: res.data.token,
                    userId: res.data.userId
                });
                const data = {
                    token: this.state.token,
                    time: new Date().getTime()
                }
                localStorage.setItem('userTokenTime', JSON.stringify(data));
                this.setState({
                    redirect: true
                });
            }).catch(err => {
                console.log(err);
                alert('Password/email combination is invalid');
            });
        } else {
            alert('Password/email combination is invalid');
        }
    }

    /**************************************EMail***********************************************************/
    emailInputChangeHandler(event) {
        this.setState({
            email: event.target.value
        });
    }
    /**************************************Password***********************************************************/
    passwordInputChangeHandler(event) {
        this.setState({
            password: event.target.value
        });
    }
    
      render() {
        if (this.state.redirect) return <Redirect to={{
            pathname: '/',
            state: this.state.email
        }} />;
        return (
            <div className="user_SignIn">
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <h2>Login</h2>
                    <label htmlFor="email"> Email: </label><br />
                    <input id="email" type="email" name="email" placeholder="example@domain.com" onChange={this.emailInputChangeHandler} required />
                    <div style={spacer} />
                    <label htmlFor="password" >Password:</label><br />
                    <input id="password" type="password" name="password" placeholder="********" onChange={this.passwordInputChangeHandler} required />
                    <div style={spacer} />
                    <button onClick={this.onSubmitHandler} className="userB_Login" type="button">Submit</button>
                    &ensp; &ensp;
                    <div className="user_Noaccnt">
                        <p>No account yet?</p>
                        <Link className="userL_Noaccnt" to="/signUp" >Sign Up </Link>
                    </div>
                </form>
            </div>
        );
    }
}
export default SignIn;
