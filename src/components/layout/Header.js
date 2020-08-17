import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/header.css';
import { logout } from '../../utils/user';

export default function Header() {
    const history = useHistory();
    const register = () => history.push('/register');
    const login = () => history.push('/login');
    return (
        <header>
            {/* <div className="background"></div> */}
            <div id="controls" className="controls"></div>
            <div id="container" className="container">
                <div id="output" className="container"></div>
            </div>
            <div id="grad"></div>
            <button onClick={login}>Login</button>
            <button onClick={register}>Register</button>
            <div> - </div>
            <button onClick={()=>logout().then(login)}>Logut</button>
        </header>
    )
}
