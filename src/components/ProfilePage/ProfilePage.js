import React, {useState} from 'react';
import PostContainer from './post/postContainer';
import styles from './profilePage.module.css';
import Status from "./Status/StatusHook";
import defaultPhoto from '../../common/defPhoto/logo192.png';
import ProfileDataForm from "./ProfileDataForm";

const ProfilePage = (props) => {

    const [editMode, changeEditMode] = useState(false)
    const EditModeChange = () => {
        changeEditMode(true)
    }
    const onSubmit = (formData) => {
       props.ThunkSendBio(formData).then(()=>{  //повторить . понять
           changeEditMode(false)
       })
        //
    }
    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.ThunkUploadPhoto(e.target.files[0])
        }
    }
    const isOwner = props.authorizedUserId === props.isOwner
    return (

        <div className={styles.dialog}>
            <div>status:<Status {...props}/></div>

            <img className={styles.mainPhoto} src={props.profile.photos.large || defaultPhoto} alt='myPhoto'></img>
            {isOwner ? <input type={"file"} onChange={onPhotoSelected}></input> : null}

            <br/>
            {isOwner && editMode ? <ProfileDataForm{...props} initialValues={props.profile} onSubmit={onSubmit}/> :
                <ProfileData {...props} isOwner={isOwner} EditModeChange={EditModeChange}/>}


            <div>comments</div>
            <PostContainer/>
        </div>

    )
}

const Contacts = (props) => {
    return <div>{props.contactTitle}:{props.contactValue}</div>
}
const ProfileData = (props) => {
    return <>
        {props.isOwner && <button onClick={props.EditModeChange}>Edit bio</button>}
        <div>About me</div>
        <div><b>FullName</b> {props.profile.fullName}</div>
        <div><b>Looking for a job :</b> {props.profile.lookingForAJob ? <span>yes</span> : <span>no</span>}</div>
        <div><b>about me :</b> {props.profile.aboutMe ? props.profile.aboutMe  : <span>info must be here</span>}</div>
        <div><b>looking for a job :</b> {props.profile.lookingForAJobDescription ? <span>OKAY THEN</span> :
            <span>add desc</span>}</div>
        {Object.keys(props.profile.contacts).map((key) => {
            return <Contacts key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
    </>
}


export default ProfilePage