import React from "react";
import axios from 'axios';
import DashbordNav from '../search_fucntion/dashboard_navigation';
import DataReadDelete from './data_Read_Delete';

const spacer = { margin: 6 }

export default class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      LogEmail_Edit: this.props.location.state,
      businessName: 'List is empty. Please register',
      posts: []
    };
  }

  componentDidMount() {
    axios.get('https://www.vendorfinder.tk/api/dashboard', {
    //axios.get('http://localhost:4000/api/dashboard', {   
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('userTokenTime')).token
      }
    })
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  displayGetInfo() {
     return this.state.posts.map((res, i) => {
      return <DataReadDelete obj={res} key={i}  email={this.state.LogEmail_Edit}/>
    });
  }

  render() {
    return (
      <div className="list_Main">
        <div >
          <DashbordNav email={this.state.LogEmail_Edit} />
          <div style={spacer} />
          <h2>- List of registered business-</h2>
        </div>
        <div className="list__Owned">
          {this.displayGetInfo()}
        </div>
      </div>
    );
  }
}
