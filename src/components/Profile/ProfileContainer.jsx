import React from 'react';
import {connect} from "react-redux";
import {getStatus, setUser, updateStatus} from "../../Redux/profileReducer";
import ProfileClassComponent from "./ProfileClassComponent";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import withProfileRedirect from "../Hoc/withProfileRedirect";

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        myId: state.auth.userId,
        status: state.profilePage.status
    }
}
let objAC = {
    setUser,
    updateStatus,
    getStatus
}
//WithAuthRedirect - мы оборачиваем нашу классовую компоненту
//Раньше было вот так
// let WithRouterProfileClassComponent = withRouter(WithAuthRedirect(ProfileClassComponent))
//
// let ProfileContainer = connect(mapStateToProps, objAC)(WithRouterProfileClassComponent)

let ProfileCompose = compose(
    connect(mapStateToProps, objAC),
    withRouter,
    withProfileRedirect
)(ProfileClassComponent)

export default ProfileCompose