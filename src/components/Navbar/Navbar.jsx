import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
    <div>
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/profile" activeClassName = {style.activeLink}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/dialogs" activeClassName = {style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/users" activeClassName = {style.activeLink}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/news" activeClassName = {style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/music" activeClassName = {style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/settings" activeClassName = {style.activeLink}>Settings</NavLink>
            </div>
        </nav>
        <div>
            <h3>Friends</h3>
            <div>
                <img src="https://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg" width="80px" />
                <img src="https://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg" width="80px" />
                <img src="https://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg" width="80px" />
            </div>
        </div>
    </div>
    )
}

export default Navbar;