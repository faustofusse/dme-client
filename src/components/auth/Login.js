import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeError } from '../../redux/actions';
import Input from './Input';
import { login } from '../../redux/actions/user';

const Login = props => {
    const [user, setUser] = useState({});

    const handleChange = async e => {
        if (props.notification.errors[e.target.name]) props.onRemoveError(e.target.name);
        setUser(Object.assign(user, { [e.target.name] : e.target.value }));
    };

    const handleLogin = async e => {
        e.preventDefault();
        const { email, password } = user;
        await props.login(email, password);
    }

    return (
        <div className="auth-form">
            <form onSubmit={handleLogin} className="modal-content animate" autoComplete="off"> 
                <h2>Login</h2>
                <hr />
                <Input type="email" name="email" placeholder="Email" onChange={handleChange} errors={props.notification.errors}/>
                <Input type="password" name="password" placeholder="Password" onChange={handleChange} errors={props.notification.errors}/>
                <input type="submit" value="Login" className="btn btn-primary pull-right" />
            </form>
        </div>
    );
}

const mapStateToProps = state => ({ notification: state.notification });
const mapDispatchToProps = { login, onRemoveError: key => dispatch => dispatch(removeError(key)) };
export default connect(mapStateToProps, mapDispatchToProps)(Login);