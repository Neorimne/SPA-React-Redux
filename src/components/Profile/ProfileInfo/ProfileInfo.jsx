import React from 'react';
import style from "./ProfileInfo.module.css";
import Preloader from '../../common/preloader/preloader';

const ProfileInfo = (props) => {
    
    if (!props.profile){
        return <Preloader />
    }
    
    return (
    <div>
        <div>
            <img src="https://ak5.picdn.net/shutterstock/videos/3775625/thumb/1.jpg" className={style.contentBack}alt="back" />
        </div>
        <div className = {style.descriptionBlock}>
            <img src={props.profile.photos.large} width="100px" height="100px" alt="Ava"/>
            ava + descr
        </div>
    </div>
    )
}

export default ProfileInfo;