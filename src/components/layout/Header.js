import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/header.css';
// import { logout } from '../../utils/user';
import { logout } from '../../redux/actions/user';
import { connect } from 'react-redux';
// import { removeToken } from '../../redux/actions';
// import { useDispatch } from 'react-redux';

const Header = (props) => {

    const history = useHistory();
    // const dispatch = useDispatch();

    const register = () => history.push('/register');
    const login = () => history.push('/login');
    // const onLogout = () => logout().then(() => {
    //     dispatch(removeToken()); 
    //     // login();
    // });

    return (
        <header>
            <div id="controls" className="controls"></div>
            <div id="container" className="container">
                <div id="output" className="container"></div>
            </div>
            <div id="grad"></div>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
            <div> - </div>
            <button onClick={() => props.logout(props.token)}>Logout</button>
        </header>
    )
    
}
const mapStateToProps = state => ({ token: state.token });
const mapDispatchToProps = { logout };
export default connect(mapStateToProps, mapDispatchToProps)(Header);