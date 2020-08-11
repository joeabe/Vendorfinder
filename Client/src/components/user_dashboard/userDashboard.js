import React from 'react';
import { Link } from 'react-router-dom';
import DashbordNav from '../search_fucntion/dashboard_navigation';
import './userDashboard.scss';

const spacer = { margin: 6 }

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dashboardEmail: this.props.location.state
        }
    }

    render() {
        return (
            <div className="userDashboard__main">
                <div className="userDashboard__nav">
                    <DashbordNav email={this.state.dashboardEmail} />
                    <div style={spacer} />
                    <h2>- My dashboard -</h2>
                </div>
                <div className="userDashboard__wrapper">
                <div className="userDashboard__body">
                    <div className="userDashboard__create">
                        <Link className="create" to={{
                            pathname: '/create',
                            state: this.state.dashboardEmail
                        }}  >
                            <button className="userB__Register">
                                Register your business
                            </button>
                        </Link>
                    </div>
                    <div className="userDashboard__list">
                        <Link className="read" to={{
                            pathname: '/read',
                            state: this.state.dashboardEmail
                        }}>
                            <button className="userB__List">
                                View registered business
                            </button>
                        </Link>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;

