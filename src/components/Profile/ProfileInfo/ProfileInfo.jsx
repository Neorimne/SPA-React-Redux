import React from 'react';
import style from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
    <div>
        <div>
            <img src="https://ak5.picdn.net/shutterstock/videos/3775625/thumb/1.jpg" className={style.contentBack} />
        </div>
        <div className = {style.descriptionBlock}>
            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" width="100px" height="100px" />
            ava + descr
        </div>
    </div>
    )
}

export default ProfileInfo;