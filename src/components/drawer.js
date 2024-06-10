import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import '../styles/drawer.css';


export default function Drawer ({isOpen, openDrawer}) {
    // 로그아웃이 초기상태
    const [isLogin, setIsLogin] = useState(false);

    const list = ['예금상품', '적금상품', '대출상품'];
    if(isLogin) {
        list.push('마이페이지');
    } else {
        list.push('회원가입');
    };

    
    return (
        <div id='drawer' className={`drawer ${isOpen ? 'open' : ''}`}>
            <div className='drawerClose'>
                <button type='button' onClick={openDrawer}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </div>

            <div className='drawerContent'>
                <div className='userSection'>
                    <div className='userProfile'>
                        <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                    <div className='userInfo'>
                        <a href='/#' onClick={()=>setIsLogin(!isLogin)}>
                            {isLogin ? '로그아웃' : '로그인'}
                        </a>
                        <p className='userEmail'></p>
                    </div>
                </div>
                <div className='list'>
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>
                                <button type='button'>{item}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}