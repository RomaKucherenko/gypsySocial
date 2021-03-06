import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import defaultAvatar from "../../../assets/avatars/RD.jpg"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <Preloader/>
    }
    return (
        <div className={s.ProfileInfo}>
            <div className={s.Avatar}>
                <img src={props.userProfile.photos.large ?
                    props.userProfile.photos.large : defaultAvatar}/>
            </div>
            <div className={s.Description}>
                <div>{props.userProfile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                {/*<ProfileStatusClassComponent status={props.status} updateStatus={props.updateStatus}/>*/}
            </div>
        </div>
    )
}

export default ProfileInfo