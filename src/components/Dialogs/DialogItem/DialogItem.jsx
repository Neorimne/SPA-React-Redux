import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './DialogItem.module.css';


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog}>
            <img src='https://www.caricature-art.com/wp-content/uploads/2019/01/%D0%A8%D0%B5%D1%80%D0%BB%D0%BE%D0%BA-785x785.jpg' width="50px" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;