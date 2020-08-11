import React from 'react';
import { Link } from 'react-router-dom';

import './components.scss'
const spacer = { margin: 3 }
const spacerS = { margin: 2 }

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: localStorage.getItem('userTokenTime'),
            email: props.email
        }
    }

   render() {
        return (
            <nav className="navbar">
                <div className="navbar__wrapper">
                    <div className="" id="navbarNavAltMarkup">
                        <div className="navbar__session">
                            {this.state.loggedIn ?
                                <React.Fragment>
                                    <Link to={{
                                        pathname: '/mydashboard',
                                        state: this.state.email
                                    }}>
                                        <button type="submit" value="Send" className="userB__Profile" > Dashboard </button>
                                    </Link>
                                    <div style={spacer} />
                                    <Link to="/signOut">
                                        <button type="submit" value="Send" className="userB__SignOut">Sign Out</button>
                                    </Link>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <p>You own a business? </p>
                                    <div style={spacerS} />
                                    <Link to="/signUp">
                                        <button type="submit" value="Send" className="userB__SignUp" > Sign Up </button>
                                    </Link>
                                    <div style={spacer} />
                                    <Link to="/signIn">
                                        <button type="submit" value="Send" className="userB__SignIn" > Sign in </button>
                                    </Link>
                                </React.Fragment>}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;

