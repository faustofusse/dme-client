import React from 'react';
import { register } from '../../redux/actions/user';
import { connect } from 'react-redux';
import '../../styles/auth.css';

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = { firstName: '', lastName: '', username: '', email: '', password: '', repeatPassword: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.props.register(this.state, (response, d) => {
            if (!response.success) return alert(response.message);
            alert('User registered!');
            this.props.history.push('/login');
        });
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

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToProps = { register };
export default connect(mapStateToProps, mapDispatchToProps)(Register);