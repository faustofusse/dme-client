import React from 'react';
import { loggedIn, login, getUser } from '../../utils/user';
import { connect } from 'react-redux';
import { setUser } from '../../redux/actions';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = { email: '', password: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (await loggedIn()) this.props.history.push('/profile');
    }

    async handleSubmit(e) {
        e.preventDefault(); 
        const response = await login(this.state.email, this.state.password);
        if (!response.success) return alert(response.message);
        const user = await getUser(response.token);
        this.props.onSetUser(user);
        this.props.history.push('/profile');
    }

    handleChange(e) {
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

const mapDispatchToProps = dispatch => ({
    onSetUser: user => dispatch(setUser(user)),
});

export default connect(null, mapDispatchToProps)(Login);
