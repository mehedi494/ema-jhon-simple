import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    // console.log(props);
  
    return (
        <div >
            <img className='logo' src={logo} alt="" />
            <div className='nav-container'>
               <NavLink to="/">
                    <span>Home</span>
                </NavLink>
                <NavLink to="/orderReview">
                    <span>Review</span>
                </NavLink>
                <NavLink to="/inventory">
                    <span>Manage inventor</span>
                </NavLink>
            </div>
            
        </div>
    );
};

export default Header;