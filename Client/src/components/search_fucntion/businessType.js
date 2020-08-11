import React from "react";
import { Link } from 'react-router-dom';
import DashbordNav from './dashboard_navigation';


const spacer = { margin: 5 }



class BusinessType extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: this.props.location.state.email,
            cityAddress: this.props.location.state.city
        }

    }
    render() {
        return (
            <div className="businessType_main">
                <DashbordNav email={this.state.email} />
                <div style={spacer} />
                <div className="businessType_link_wrapper">
                <div className="businessType_link">
                    <React.Fragment>
                        <Link className="businessType_link__shops" to={{
                            pathname: '/business/shops',
                            state: {
                                email: this.state.email,
                                city: this.state.cityAddress
                            }
                        }} exact>
                            Shops
                </Link>
                        <div style={spacer} />
                        <Link className="businessType_link__hangouts" to={{
                            pathname: '/business/hangouts',
                            state: {
                                email: this.state.email,
                                city: this.state.cityAddress
                            }
                        }} exact>
                            Hangouts
                </Link>
                        <div style={spacer} />
                        <Link className="businessType_link__wellness" to={{
                            pathname: '/business/wellness',
                            state: {
                                email: this.state.email,
                                city: this.state.cityAddress
                            }
                        }} exact>
                            Wellness
                </Link>
                        <div style={spacer} />
                        <Link className="businessType_link__services" to={{
                            pathname: '/business/services',
                            state: {
                                email: this.state.email,
                                city: this.state.cityAddress
                            }
                        }} exact>
                            Services
                </Link>
                    </React.Fragment>
                </div>
                </div>
            </div>
        );
    }
}

export default BusinessType;