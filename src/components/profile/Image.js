import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import Files from './Files';
import '../../styles/image.css';

const Image = (props) => {
    return (
        <div id="image">
            <button id="edit" className={props.edit ? 'cancel' : 'edit'} onClick={props.toggleEdit}>
                <FontAwesomeIcon icon={props.edit ? faTimes : faPen} />
            </button>
            <img src={props.src} alt="Profile"/>
            <div id="upload" style={{ display: props.edit ? 'block' : 'none' }}>
                <Files uploadImage={props.uploadImage} onUpload={props.onUpload}/>
            </div>
        </div>
    );
}

export default Image;