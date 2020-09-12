import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeError } from '../../redux/actions';
import Input from './Input';
import { register } from '../../redux/actions/user';

const Register = props => {
    const [user, setUser] = useState({});

    const handleChange = async e => {
        if (props.notification.errors[e.target.name]) props.onRemoveError(e.target.name);
        setUser(Object.assign(user, { [e.target.name] : e.target.value }));
    };

    const handleRegister = async e => {
        e.preventDefault();
        props.register(user, (response, d) => response.success ? props.history.push('/login') : null);
    }

    return (
        <div className="auth-form">
            <form onSubmit={handleRegister} className="modal-content animate">
                <h2>Register</h2>
                <hr />
                <Input type="text" name="firstName" placeholder="First Name" onChange={handleChange} errors={props.notification.errors} />
                <Input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} errors={props.notification.errors} />
                <Input type="text" name="username" placeholder="Username" onChange={handleChange} errors={props.notification.errors} />
                <Input type="email" name="email" placeholder="Email" onChange={handleChange} errors={props.notification.errors} />
                <Input type="password" name="password" placeholder="Password" onChange={handleChange} errors={props.notification.errors} />
                <Input type="password" name="repeatPassword" placeholder="Repeat Password" onChange={handleChange} errors={props.notification.errors} />
                {/* <label><input type="checkbox" name="remember" />Remember me.</label> */}
                <input type="submit" value="Register" className="btn btn-primary pull-right" />
            </form>
        </div>
    );
}

const mapStateToProps = state => ({ notification: state.notification });
const mapDispatchToProps = { register, onRemoveError: key => dispatch => dispatch(removeError(key)) };
export default connect(mapStateToProps, mapDispatchToProps)(Register);