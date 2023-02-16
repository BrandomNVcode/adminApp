import React from 'react';
import MenuList from '../MenuList/MenuList';
import "./styles.css"



const NavBar = ({username, image}) => {
    return (
        <div className="navbar-content">
            <a href="/Projects" className="logo-link">
                <img src='/assets/images/Logo.png' alt='Logo' className='logo-img' />
            </a>
            <div className="separador"></div>
            <div className="content-right">
                <div className="user-content">
                    <div className="img-content">
                        <img alt="John" src="/assets/icons/user_icon.png" className="img-user" />
                    </div>
                    <div className="">
                        <span className="username">{username}</span>
                    </div>
                    <MenuList>
                        <button>GG</button>
                    </MenuList>
                </div>
            </div>
        </div>
    )
}

export default NavBar