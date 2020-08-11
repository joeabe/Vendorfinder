import React from "react";
import { Link } from 'react-router-dom';
import Navigation from '../main/navigation'

class dashboard_navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email
        };
     }

     componentDidMount(){
    //    console.log('TEST EMAIL_Dashboard', this.state.email)
            }
            
    render() {
    return (
        <div className="businessType_nav">
            <div className="businessType_home">
                <Link to={{
            pathname: '/',
            state: this.state.email }} exact >
                    <button type="submit" value="Send" className="userB__Home" > Home </button>
                </Link>
            </div>
            <div className="businessType_user">
                <Navigation  email={this.state.email}/>
            </div>
        </div>
    )
}
}
export default dashboard_navigation;