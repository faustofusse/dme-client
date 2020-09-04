import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUser, uploadImage, setUser } from '../../redux/actions';
import { API_URL } from '../../constants';
import Image from './Image';

import '../../styles/profile.css';

const Profile = (props) => {
    const [editImage, setEditImage] = useState(false);
    const imgUrl = props.user.image ? `${API_URL}/images/${props.user.image}` : './images/user.png';
    const { firstName, lastName, email, username } = props.user;

    const toggleEdit = () => setEditImage(!editImage);

    const onUpload = async (user) => {
        await props.onSetUser(user);
        toggleEdit();
    }

    return (
        <div id="profile">
            <div id="info"> 
                <div>
                    <h4>Profile:</h4> <hr />
                    <p>Name: {firstName} {lastName}</p>
                    <p>Email: {email}</p>
                    <p>Username: {username}</p>
                </div>
                <Image src={imgUrl} onUpload={onUpload} edit={editImage} 
                    toggleEdit={toggleEdit} uploadImage={props.uploadImage} />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = { getUser, uploadImage, onSetUser: user => dispatch => dispatch(setUser(user)) };
export default connect(mapStateToProps, mapDispatchToProps)(Profile);