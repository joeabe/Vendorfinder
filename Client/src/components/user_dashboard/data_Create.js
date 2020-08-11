import React from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import DashbordNav from '../search_fucntion/dashboard_navigation';

import './userDashboard.scss';
const spacer = { margin: 15 }

class FillUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businessName: '',
            businessType: '',
            businessDescription: '',
            contactNumber: '',
            contactAddress: '',
            cityAddress: '',
            postalCode: '',
            email: this.props.location.state,
            value: '1'

        }

        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.businessNameHandler = this.businessNameHandler.bind(this);
        this.businesstypeHandler = this.businesstypeHandler.bind(this);

        this.businessDescriptionHandler = this.businessDescriptionHandler.bind(this);
        this.contactNumberHandler = this.contactNumberHandler.bind(this);
        this.contactAddressHandler = this.contactAddressHandler.bind(this);

        this.cityAddressHandler = this.cityAddressHandler.bind(this);
        this.postalCodeHandler = this.postalCodeHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);

        //  this.resetUserInputs = this.resetUserInputs.bind(this);
    }

    /**************************************ON SUBMIT***********************************************************/

    onSubmitHandler(e) {
        e.preventDefault();
        if (!(this.state.businessName === '' || this.state.businessType === '' || this.state.businessDescription === '' || this.state.contactNumber === ''
            || this.state.contactAddress === '' || this.state.cityAddress === '' || this.state.postalCode === '' || this.state.email === '')) {
            axios.post('https://www.vendorfinder.tk/api/dashboard', {
                //axios.post('http://localhost:4000/api/dashboard', {       
                businessName: this.state.businessName,
                businessType: this.state.businessType,
                businessDescription: this.state.businessDescription,
                contactNumber: this.state.contactNumber,
                contactAddress: this.state.contactAddress,
                cityAddress: this.state.cityAddress,
                postalCode: this.state.postalCode,
                email: this.state.email
            },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token
                    }
                }
            ).then(res => {
                this.setState({
                    redirect: true,
                    email: this.state.email
                });
                alert('Business Registered. Thank you!');
            }).catch(err => {
                console.log(err);
                alert('Registration failed. Please try again.');
            });
        } else {
            alert('Registration failed. Please try again.');
        }
    }

    /************************************************ON CHANGE*******************************************************/
    businessNameHandler(event) {
        this.setState({
            businessName: event.target.value
        });
    }

    businesstypeHandler(event) {
        this.setState({
            businessType: event.target.value
        });
    }

    businessDescriptionHandler(event) {
        this.setState({
            businessDescription: event.target.value
        });
    }

    contactNumberHandler(event) {
        this.setState({
            contactNumber: event.target.value
        });
    }

    contactAddressHandler(event) {
        this.setState({
            contactAddress: event.target.value
        });
    }

    cityAddressHandler(event) {
        this.setState({
            cityAddress: event.target.value
        });
    }

    postalCodeHandler(event) {
        this.setState({
            postalCode: event.target.value
        });
    }
    emailHandler(event) {
        this.setState({
            email: event.target.value
        });
    }

    /*********************************************************************************************************/
    render() {
        if (this.state.redirect) return <Redirect to={{
            pathname: '/mydashboard',
            state: this.state.email
        }} />;
        return (
            <div className="fillUp_Main">
                <div >
                    <DashbordNav email={this.state.email} />
                </div>
                <div className="user_FillUp">
                    <form onSubmit={this.onSubmitHandler}>
                        <h2>Register</h2>
                        <div style={spacer} />
                        <label htmlFor="first-name" >Business Name:</label><br />
                        <input id="business-name" maxlength="30" type="text" name="businessName" placeholder="MyCompany Oy" onChange={this.businessNameHandler} required />
                        <div style={spacer} />
                        <label htmlFor="business-Type" >Business Type</label><br />
                        <select id="business-type" type="select" name="businessType" onChange={this.businesstypeHandler} required>
                            <option default>-select type-</option>
                            <option value='1' disabled>-select type-</option>
                            <option value="Shops">Shops</option>
                            <option value="Hangouts">Hangouts</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Services">Services</option>
                        </select>
                        <div style={spacer} />
                        <label htmlFor="business-Description" >Description</label><br />
                        <input id="business-Description" maxlength="30" type="text" rows="4" name="businessDescription" placeholder="Provide a brief description" onChange={this.businessDescriptionHandler} required />
                        <div style={spacer} />
                        <label htmlFor="contact-Number" >Contact Number:</label><br />
                        <input id="contact-Number" type="text" name="contactNumber" placeholder="Ex. 000 012 3456" onChange={this.contactNumberHandler} required />
                        <div style={spacer} />
                        <label htmlFor="contact-Address" >Street Address:</label><br />
                        <input id="contact-Address" maxlength="30" type="text" name="contactAddress" placeholder="Ex. name street 0 A 0" onChange={this.contactAddressHandler} required />
                        <div style={spacer} />
                        <label htmlFor="city" >City:</label><br />
                        <select id="city" type="select" name="cityAddress" onChange={this.cityAddressHandler} required>
                            <option default>-select city-</option>
                            <option value="Joensuu">Joensuu</option>
                            <option value="Ilomantsi">Ilomantsi</option>
                            <option value="Juuka">Juuka</option>
                            <option value="Kontiolahti">Kontiolahti</option>
                            <option value="Liperi">Liperi</option>
                            <option value="Outokumpu">Outokumpu</option>
                            <option value="Polvijärvi">Polvijärvi</option>
                        </select>
                        <div style={spacer} />
                        <label htmlFor="postal-Code" >Postal Code:</label><br />
                        <input id="postal-Code" type="text" name="postalCode" placeholder="Postal code" onChange={this.postalCodeHandler} required />
                        <div style={spacer} />
                        <div style={spacer} />
                        <button onClick={this.onSubmitHandler} className="userB_FillUp" type="button">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default FillUp;

































