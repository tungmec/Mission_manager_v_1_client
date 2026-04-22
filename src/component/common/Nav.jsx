import React from "react";
import {NavLink} from 'react-router-dom';
import styles from './Nav.module.css';
import {useSelector, useDispatch} from 'react-redux'

const setNavLinkClass = ({isActive}) => {
        return [
            styles.navlink,
            isActive? styles.activelink : ""

        ].join(" ");

    }

export const Nav = () => {
    const isLogin = useSelector(state => state.auth.isAuthenticated);
    

    
    return (
        <nav className={styles.nav}>
            <NavLink
                to="/"
                className={setNavLinkClass}
            >
                Home
            </NavLink>
           

            <NavLink 
                to="/sub_user_mng"
                className={setNavLinkClass}
            >
                Sub Users Manager
            </NavLink>


            {
                isLogin? 
                <button>Log out</button> 
                :
                <NavLink 
                to="/login" 
                className={setNavLinkClass}
                >
                    User Login / Create User
                </NavLink>
            }

        </nav>
    )
}