import React from 'react';
import '../../styles/auth.css';
import { loggedIn, register } from '../../utils/user';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = { firstName: '', lastName: '', username: '', email: '', password: '', repeatPassword: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (await loggedIn()) this.props.history.push('/profile');
    }

    async handleSubmit(e) {
        e.preventDefault();
        const response = await register(this.state);
        if (!response.success) return alert(response.message);
        alert('User registered!!');
        this.props.history.push('/login');
    }

    handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    render(){
        return (
            <div className="register">
                <form onSubmit={this.handleSubmit} className="modal-content animate">
                    <h2>Register</h2>
                    <hr />
                    <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange} required/>
                    <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange} required/>
                    <input type="email" value={this.state.email} name="email" placeholder="Email" onChange={this.handleChange} required/>
                    <input type="text" value={this.state.username} name="username" placeholder="Username" onChange={this.handleChange} required/>
                    <input type="password" value={this.state.password} name="password" placeholder="Password" onChange={this.handleChange} required/>
                    <input type="password" value={this.state.repeatPassword} name="repeatPassword" placeholder="Repeat Password" onChange={this.handleChange} required/>
                    {/* <label><input type="checkbox" name="remember" />Remember me.</label> */}
                    <input type="submit" value="Register" className="btn btn-primary pull-right" />
                </form>
            </div>
        )
    }
}

export default Register;