import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/main/home';
import SignIn from './components/user_account/signIn';
import SignUp from './components/user_account/signUp';
import SignOut from './components/user_account/signOut';
import Business from './components/search_fucntion/businessType';

import Shops from './components/search_fucntion/t_shops';
import Hangouts from './components/search_fucntion/t_hangouts';
import Wellness from './components/search_fucntion/t_wellness';
import Services from './components/search_fucntion/t_services';

import UserDashboard from './components/user_dashboard/userDashboard';
import FormCreate from './components/user_dashboard/data_Create';
import DataList from './components/user_dashboard/data_Read_Main';
import DataEdit from './components/user_dashboard/data_Update';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route exact path="/signOut" component={SignOut} />
      <Route exact path="/business" component={Business} />
      
      <Route exact path="/business/shops" component={Shops} />
      <Route exact path="/business/hangouts" component={Hangouts} />
      <Route exact path="/business/wellness" component={Wellness} />
      <Route exact path="/business/services" component={Services} />

      <Route exact path="/mydashboard" component={UserDashboard} />
      <Route exact path="/create" component={FormCreate} />
      <Route exact path="/read" component={DataList} />
      <Route exact path="/edit/:id" component={DataEdit} />

      

    </React.Fragment>
  );
}

export default App;
