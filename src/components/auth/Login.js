import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/user';

const Login = props => {
    const [user, setUser] = useState({});
    const handleChange = async e => setUser(Object.assign(user, { [e.target.name] : e.target.value }));

    const handleLogin = async e => {
        e.preventDefault();
        const { email, password } = user;
        await props.login(email, password);
    }

    return (
        <div className="register">
            <form onSubmit={handleLogin} className="modal-content animate" autoComplete="off"> 
                <h2>Login</h2>
                <hr />
                <input type="email" name="email" onChange={handleChange} className="span3" placeholder="Email" required/>
                <input type="password" name="password" onChange={handleChange} className="span3" placeholder="Password" required/>
                <input type="submit" value="Login" className="btn btn-primary pull-right" />
            </form>
        </div>
    );
}

const mapDispatchToProps = { login };
export default connect(null, mapDispatchToProps)(Login);