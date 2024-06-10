import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';

import Drawer from './drawer';
import '../styles/header.css';


export default function Header(){
    const location = useLocation();
    const navigate = useNavigate();

    const isIndexPage = location.pathname === '/';

    // drawer 초기상태 : close 
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const openDrawer = () => {
        // console.log('hi');
        setIsDrawerOpen(!isDrawerOpen);    
    };

    return(
        <header
            id='header'
            className='header' 
        >
            <div
                className='headerLeft'
            >
                {isIndexPage ? (
                    <img src='/logo.png' alt='logo'/> 
                ) : (
                    <a href='/#' onClick={() => navigate(-1)}> <FontAwesomeIcon icon={faChevronLeft} /> </a>
                )}
            </div>

            <div
                className='headerRight'
            >
                <a href='/#'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
                <a href='/#' onClick={openDrawer}>
                <FontAwesomeIcon icon={faBars} />
                </a>
                <Drawer isOpen={isDrawerOpen} openDrawer={openDrawer} />
            </div>
        </header>
    )
}