import  * as React from 'react';
import {useNavigate} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faHeart, faCartShopping, faUser, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import '../styles/navigation.css';

export default function Navigation (){
    const checkLoginStatus = () => {
        // login 상태 확인 로직 구현
        return localStorage.getItem('isLoggedIn') === 'true';
    };

    const navigate = useNavigate();

    const loginPopup = (path) => {
        if(path === '/' || checkLoginStatus()) {
            navigate(path);
        } else {
            alert('로그인 후 이용해주세요.');
            navigate('/login'); // 로그인 페이지로 이동
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior: 'smooth'});
    };
        

    return(
        <div>
            <nav id='navigation' className='navigation'>
                <button type='button' onClick={()=>loginPopup('/')}>
                    <FontAwesomeIcon icon={faHouse} />
                </button>
                <button type='button' onClick={()=>loginPopup('/favorite')}>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <button type='button' onClick={()=>loginPopup('/cart')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
                <button type='button' onClick={()=>loginPopup('/myPage')}>
                    <FontAwesomeIcon icon={faUser} />
                </button>
            </nav>
            <div className='topButton'>
                <button type='button' onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
            </div> 
        </div>
    )
}

