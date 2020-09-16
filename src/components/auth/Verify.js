import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { removeError } from '../../redux/actions';
import { verify, logout } from '../../redux/actions/user';
import { useParams } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Input from './Input';

const Verify = props => {
    const { token } = useParams();
    const [user, setUser] = useState({});
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        try { setFirstName(jwt_decode(token).firstName); } 
        catch (e) { props.history.push('/'); }
    }, []);

    const handleChange = async e => {
        if (props.notification.errors[e.target.name]) props.onRemoveError(e.target.name);
        setUser(Object.assign(user, { [e.target.name] : e.target.value }));
    };

    const handleVerify = e => {
        e.preventDefault();
        const { password, repeatPassword } = user;
        props.verify(token, password, repeatPassword, (response) => {
            if (response.success) props.history.push('/login');
        });
    };

    return (
        <div className="auth-form">
            <form onSubmit={handleVerify} className="modal-content animate" autoComplete="off"> 
                <h2>Hello again {firstName}!</h2>
                <p style={{margin:0}}>Enter your password to <strong>verify</strong> your user</p>
                <hr />
                <Input type="password" name="password" placeholder="Password" onChange={handleChange} errors={props.notification.errors}/>
                <Input type="password" name="repeatPassword" placeholder="Repeat Password" onChange={handleChange} errors={props.notification.errors}/>
                <input type="submit" value="Verify" className="btn btn-primary pull-right" />
            </form>
        </div>
    );
}

const mapStateToProps = state => ({ notification: state.notification, token: state.token });
const mapDispatchToProps = { verify, logout, onRemoveError: key => dispatch => dispatch(removeError(key)) };
export default connect(mapStateToProps, mapDispatchToProps)(Verify);