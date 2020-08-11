import React from 'react';
import { Redirect } from 'react-router-dom';

const signOut = props => {
  if (localStorage.getItem('userTokenTime')) {
    localStorage.removeItem('userTokenTime');
  }
  alert('You are signed out. Thank you!');
  return <Redirect to="/" />;
}

export default signOut;