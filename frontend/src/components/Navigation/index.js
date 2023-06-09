


import './Navigation.css';
import * as sessionActions from '../../store/session';

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useState } from 'react';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const [clickState, setClickState]=useState(false)
  console.log('NAVIGATION....CLICKSTATE',clickState)

    //creates the star icon
    const person = () => {
      return (
          <div style={{ color: "black", fontSize: "20px" }}>
              <i className="fa-solid fa-circle-user"></i>
          </div>
      );
  };

  const bars = () => {
    return (
        <div style={{ color: "black", fontSize: "20px" }}>
          <i className="fa-solid fa-bars"></i>
        </div>
    );
};


  function choices(){
    return (

      <div className='choices'>

        <div>
          <NavLink to="/signup">Sign up</NavLink>
        </div>

        <div>
          <NavLink to="/login">Log in</NavLink>
        </div>

      </div>
    )
  }

  function clicked(){
    if(clickState){
      return choices()
    }
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  let sessionLinks;

  if (sessionUser) {

    sessionLinks = (
      <div>
        <ProfileButton user={sessionUser} />

        {/* <button onClick={logout}>Log Out</button> */}
      </div>
    );

  } else {
    sessionLinks = (

      <>

        <div className='leftSide'>
          <button className='mainButton' onClick={()=>setClickState(!clickState)}>
              {bars()}
              {person()}
          </button>

          {clicked()}
        </div>
      </>

    );
  }

  return (
    <div className='whole'>


      <div className='roseButton'>
        <NavLink exact to="/">
          <img src={'https://images.pexels.com/photos/442188/pexels-photo-442188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt={'Home'} width="50" height="50"/>
        </NavLink>
        <div className='roseWord'>
          earthbnb
        </div>

      </div>

      {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
