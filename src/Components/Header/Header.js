import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    const icon = <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />

    return (
        <div >
            <img className='logo' src={logo} alt="" />
            <div className='nav-container'>
                <a href="#">
                    <span>Home</span>
                </a><a href="#">
                    <span>Review</span>
                </a><a href="#">
                    <span>Manage inventor</span>
                </a>
            </div>
            <div className='input-container'>
                <span className='srcAndiconCombine'>
                    <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                    <input className='inputField' type="text" placeholder='Search your products here' />
                </span>
            </div>
        </div>
    );
};

export default Header;