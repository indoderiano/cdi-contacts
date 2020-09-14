import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useLocation } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { GetContacts } from './redux/actions'
import HeaderPage from './components/Header'
import WelcomePage from './components/Welcome'
import Contacts from './components/Contacts'
import { connect } from 'react-redux';


function App(props) {

  let location=useLocation()

  useEffect(()=>{
    if(location.pathname=='/contacts'){
      // console.log('to contacts')
      props.Routing('contacts')
    }else if(location.pathname=='/'){
      props.Routing('welcome')
    }

    props.GetContacts()

  },[])

  return (
    <div>
      <HeaderPage/>
      <Switch>
        <Route path='/' exact component={WelcomePage}/>
        <Route path='/contacts' exact component={Contacts}/>
      </Switch>
    </div>
  );
}

const Routing=(page)=>{
  return{
    type: 'ROUTE',
    payload: page
  }
}

export default connect(null,{Routing,GetContacts}) (App);
