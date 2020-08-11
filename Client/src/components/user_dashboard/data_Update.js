import React from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import DashbordNav from '../search_fucntion/dashboard_navigation';
import './userDashboard.scss'

const spacer = { margin: 15 }

export default class Edit extends React.Component {
    constructor(props) {
        super(props);
        //
        this.state = {
            businessName: '',
            businessType: '',
            businessDescription: '',
            contactNumber: '',
            contactAddress: '',
            cityAddress: '',
            postalCode: '',
            email: this.props.location.state
        }
        //
        this.onSubmit = this.onSubmit.bind(this);
        this.businessNameHandler = this.businessNameHandler.bind(this);
        this.businesstypeHandler = this.businesstypeHandler.bind(this);

        this.businessDescriptionHandler = this.businessDescriptionHandler.bind(this);
        this.contactNumberHandler = this.contactNumberHandler.bind(this);
        this.contactAddressHandler = this.contactAddressHandler.bind(this);

        this.cityAddressHandler = this.cityAddressHandler.bind(this);
        this.postalCodeHandler = this.postalCodeHandler.bind(this);
        this.emailHandler = this.emailHandler.bind(this);
        //
        //
    }
    /***************************************************DID MOUNT*******************************************************/
    componentDidMount() {
        axios.get('https://www.vendorfinder.tk/api/dashboard/' + this.props.match.params.id)
        //axios.get('http://localhost:4000/api/dashboard/' + this.props.match.params.id)    
        .then(res => {
                this.setState({
                    businessName: res.data.businessName,
                    businessType: res.data.businessType,
                    businessDescription: res.data.businessDescription,
                    contactNumber: res.data.contactNumber,
                    contactAddress: res.data.contactAddress,
                    cityAddress: res.data.cityAddress,
                    postalCode: res.data.postalCode,
                    email: res.data.email
                });
                console.log('get done');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    /***************************************************ON CHANGE*******************************************************/

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

    /************************************************ON SUBMIT*******************************************************/
    onSubmit(e) {
        e.preventDefault()
        const Object = {
            businessName: this.state.businessName,
            businessType: this.state.businessType,
            businessDescription: this.state.businessDescription,
            contactNumber: this.state.contactNumber,
            contactAddress: this.state.contactAddress,
            cityAddress: this.state.cityAddress,
            postalCode: this.state.postalCode,
            email: this.state.email
        };
        axios.put('https://www.vendorfinder.tk/api/dashboard/' + this.props.match.params.id, Object)
        //axios.put('http://localhost:4000/api/dashboard/' + this.props.match.params.id, Object)   
        .then((res) => {
                this.setState({
                    redirect: true
                })
                console.log(res.data)
                console.log('successfully updated')
            }).catch((error) => {
                console.log(error)
            })
        alert('Information updated. Thank you!');
    }

    /**************************************************************************************************************/
    render() {
        if (this.state.redirect) return <Redirect to={{
            pathname: '/read',
            state: this.state.email
        }} />;
        return (
            <div className="edit_Main">
                <div >
                    <DashbordNav email={this.state.email} />
                </div>
                <div className="edit_FillUp">
                    <form onSubmit={this.onSubmit}>
                        <h2>Update</h2>
                        <div style={spacer} />
                        <label htmlFor="business-name" >Business Name:</label><br />
                        <input id="business-name" maxlength="30" type="text" name="businessName" onChange={this.businessNameHandler} value={this.state.businessName} required />
                        <div style={spacer} />
                        <label htmlFor="business-Type" >Business Type</label><br />
                        <select id="business-type" type="select" value={this.state.businessType} name="businessType" onChange={this.businesstypeHandler} required>
                            <option default>-select type-</option>
                            <option value="Shops">Shops</option>
                            <option value="Hangouts">Hangouts</option>
                            <option value="Wellness">Wellness</option>
                            <option value="Services">Services</option>
                        </select>
                        <div style={spacer} />
                        <label htmlFor="business-Description" >Description</label><br />
                        <input id="business-Description" maxlength="30" type="text" rows="4" value={this.state.businessDescription} name="businessDescription" onChange={this.businessDescriptionHandler} required />
                        <div style={spacer} />
                        <label htmlFor="contact-Number" >Contact Number:</label><br />
                        <input id="contact-Number" type="text" value={this.state.contactNumber} name="contactNumber" onChange={this.contactNumberHandler} required />
                        <div style={spacer} />
                        <label htmlFor="contact-Address" >Street Address:</label><br />
                        <input id="contact-Address" maxlength="30" type="text" name="contactAddress" value={this.state.contactAddress} onChange={this.contactAddressHandler} required />
                        <div style={spacer} />
                        <label htmlFor="city" >City:</label><br />
                        <select id="city" type="select" name="cityAddress" value={this.state.cityAddress} onChange={this.cityAddressHandler} required>
                            <option value={this.state.cityAddress}>{this.state.cityAddress}</option>
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
                        <input id="postal-Code" type="text" value={this.state.postalCode} name="postalCode" onChange={this.postalCodeHandler} required />
                        <div style={spacer} />
                        <div style={spacer} />
                        <input type="submit" name="submit" className="userB_FillUp" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}
