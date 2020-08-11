import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const spacer = { margin: 6 }

class Data_Delete_Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: props.email
        };
        this.delete = this.delete.bind(this);
    }

    /*************************************************ON DELETE*********************************************** */
    delete(e) {
        e.preventDefault();
        axios.delete('https://www.vendorfinder.tk/api/dashboard/' + this.props.obj._id, {
        //axios.delete('http://localhost:4000/api/dashboard/' + this.props.obj._id, {  
        headers: {
                'Content-Type': 'application/json',
                'x-auth-token': JSON.parse(localStorage.getItem('userTokenTime')).token
            }
        })
            .then((res) => {
                this.setState({ redirect: true });
                console.log('Student successfully deleted!')
            },
                alert('Data deleted!')
            ).catch((error) => {
                console.log(error)
            })
    }


    render() {
        if (this.state.redirect) return <Redirect to={{
            pathname: '/read',
            state: this.state.email
        }} />;
        return (
            <div>
                <div style={spacer} />
                <p className="businessName">Name:&ensp;{this.props.obj.businessName}</p>
                <p className="businessType">Type:&ensp;{this.props.obj.businessType}</p>
                <div style={spacer} />
                <p className="contactAddress">Address:&ensp;{this.props.obj.contactAddress}</p>
                <p className="cityAddress">City:&ensp;{this.props.obj.cityAddress},&ensp;{this.props.obj.postalCode}</p>
                <div style={spacer} />
                <p className="contactNumber">Phone:&ensp;{this.props.obj.contactNumber}</p>
                <p className="email">Email:&ensp;{this.props.obj.email}</p>
                <p className="businessDescription">Description:&ensp;"{this.props.obj.businessDescription}"</p>
                <Link to={{
                    pathname: '/edit/' + this.props.obj._id,
                    state: this.state.email
                }} >
                    <button className="userB_EditInfo">   Edit </button>
                </Link>
                    &ensp; 
                <button onClick={this.delete} className="userB_DeleteInfo">Delete</button>
                <hr />
            </div>
        );
    }
}
export default Data_Delete_Edit;

