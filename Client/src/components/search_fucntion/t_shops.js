import React from 'react';
import DashbordNav from './dashboard_navigation';
import axios from 'axios';

import './search_function.scss';

const spacer = { margin: 12 }

class Shops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_email: this.props.location.state.email,
            user_city: this.props.location.state.city,
            businessName: '',
            businessType: '',
            businessDescription: '',
            contactNumber: '',
            contactAddress: '',
            cityAddress: '',
            postalCode: '',
            email: '',
            posts: []
        }
    }

    componentDidMount = () => {
        this.getInfo();
        //console.log('TEST _CITY & EMAIL HANGOUTS', this.state.user_city, this.state.user_email)
    };

    getInfo = () => {
        axios.get('https://www.vendorfinder.tk/api/shops')
        //axios.get('http://localhost:4000/api/shops')
            .then((response) => {
                const data = response.data;
                const result = data.filter(info => info.cityAddress === this.state.user_city)
                this.setState({ posts: result });
                // console.log('TEST RESULT HERE', this.state.posts);
            })
            .catch((err) => {
                console.log(err);
                alert('Error retrieving data')
            });
    };

    displayGetInfo = (posts) => {
        return posts.map((post, index) => (
            <div key={index} className="type__wrapper">
                <p className="businessName">{post.businessName}</p>
                <p className="contactAddress">{post.contactAddress}</p>
                <p className="cityAddress">{post.cityAddress},&ensp;{post.postalCode}</p>
                <div style={spacer} />
                <p className="contactNumber">Phone:&ensp;{post.contactNumber}</p>
                <p className="email">Email:&ensp;{post.email}</p>
                <p className="businessDescription">"{post.businessDescription}"</p>
                <hr />
            </div>
        ));

    };
    render() {
        return (
            <div className="type__main">
                <div >
                    <DashbordNav email={this.state.user_email} />
                    <div style={spacer} />
                    <h2>- Shops -</h2>
                </div>
                <div className="type__shopsMain">
                    {this.displayGetInfo(this.state.posts)}
                </div>
            </div>
        );
    }
}
export default Shops;

