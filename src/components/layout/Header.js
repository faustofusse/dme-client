import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../redux/actions/user';
import { connect } from 'react-redux';
import { removeNotification } from '../../redux/actions';
import '../../styles/header.css';

const API_URL = process.env.API_URL;

const Header = (props) => {
    const history = useHistory();
    const imgUrl = props.user && props.user.image ? `${API_URL}/images/${props.user.image}` : './images/user.png';

    const goto = async route => {
        await props.onRemoveNotification();
        history.push(route);
    }

    return (
        <header>
            <div id="background">
                <div id="controls" className="controls"></div>
                <div id="container" className="container">
                    <div id="output" className="container"></div>
                </div>
            </div>
            <div id="grad"></div>
            <div id="sign" className="corner" style={{ display: props.token ? 'none' : 'flex' }}>
                <button onClick={() => goto('/login')}>Login</button>
                <span> | </span>
                <button onClick={() => goto('/register')}>Register</button>
            </div>
            <div id="userInfo" className="corner" style={{ display: props.token ? 'flex' : 'none' }}>
                <button id="logout" onClick={() => props.logout(props.token)}>Logout</button>
                <button onClick={() => goto('/profile')}>
                    <img src={imgUrl} alt="profile"/>
                </button>
            </div>
        </header>
    )    
}

const mapStateToProps = state => ({ token: state.token, user: state.user });
const mapDispatchToProps = { logout, onRemoveNotification: () => dispatch => dispatch(removeNotification()) };
export default connect(mapStateToProps, mapDispatchToProps)(Header);