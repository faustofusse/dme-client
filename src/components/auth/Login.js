import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/user';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { email: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleSubmit(e) {
        e.preventDefault(); 
        const { email, password } = this.state;
        await this.props.login(email, password);
    }

    async handleChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    render(){
        return (
            <div className="register">
                <form onSubmit={this.handleSubmit} className="modal-content animate" autoComplete="off">
                    <h2>Login</h2>
                    <hr />
                    <input type="email" name="email" value={this.state.email} className="span3" placeholder="Email" onChange={this.handleChange} required/>
                    <input type="password" name="password" value={this.state.password} className="span3" placeholder="Password" onChange={this.handleChange} required/>
                    <input type="submit" value="Login" className="btn btn-primary pull-right" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.user, token: state.token });
const mapDispatchToProps = { login };
export default connect(mapStateToProps, mapDispatchToProps)(Login);