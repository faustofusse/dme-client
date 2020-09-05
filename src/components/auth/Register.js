import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/actions/user';

const Register = props => {
    const [user, setUser] = useState({});
    const handleChange = async e => setUser(Object.assign(user, { [e.target.name] : e.target.value }));

    const handleRegister = async e => {
        e.preventDefault();
        props.register(user, (response, d) => {
            if (!response.success) return alert(response.message);
            alert('User registered!');
            props.history.push('/login');
        });
    }

    return (
        <div className="register">
            <form onSubmit={handleRegister} className="modal-content animate">
                <h2>Register</h2>
                <hr />
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required/>
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required/>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required/>
                <input type="password" name="repeatPassword" placeholder="Repeat Password" onChange={handleChange} required/>
                {/* <label><input type="checkbox" name="remember" />Remember me.</label> */}
                <input type="submit" value="Register" className="btn btn-primary pull-right" />
            </form>
        </div>
    );
}

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = { register };
export default connect(null, mapDispatchToProps)(Register);