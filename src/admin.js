import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCountLogin,
  selectCountSignup,
  selectCountAdmin,
  updateRequests
} from './components/counter/counterSlice';
import { Link } from 'react-router-dom';

const Admin = () => {
  const dispatch = useDispatch();

  let countLogin = useSelector(selectCountLogin);
  let countSignup = useSelector(selectCountSignup);
  let countAdmin = useSelector(selectCountAdmin);

  console.log(countLogin);

  let params = {
    login: 0,
    signup: 0,
    admin: 0
  };

  let authFunc = async () => {
    const xhttp = new XMLHttpRequest();

    // if (values.password !== "") {
    xhttp.open('POST', 'http://mincasa.khademsam.com/API/v1/admin/', true);
    let creds = { username: 'admin', password: 'abcd1234' };
    xhttp.setRequestHeader('Content-type', 'application/JSON');
    xhttp.send(JSON.stringify(creds));
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(params);
        console.log('before if' + xhttp.readyState);
        const responseJSON = JSON.parse(this.response);
        dispatch(updateRequests(responseJSON));
      }
    };
  };
  useLayoutEffect(() => {
    //check local token or something
    authFunc();
  });
  console.log('outsidee of fn:' + params.login);
  return (
    <div>
      <p>Login request: {countLogin}</p>
      <p>Signup requests: {countSignup}</p>
      <br />
      <p>Admin requests: {countAdmin}</p>
      <Link to='/admin'>
        <p id='login-signup-link'>Back to Login</p>
      </Link>
      <br />

      <Link to='/signup'>
        <p id='login-signup-link'>Back to sign up</p>
      </Link>
    </div>
  );
};

export default Admin;
