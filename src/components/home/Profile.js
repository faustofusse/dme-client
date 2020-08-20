import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../redux/actions';
import { loggedIn } from '../../utils/user';
import { API_URL } from '../../constants';
import '../../styles/profile.css';

class Profile extends React.Component {
    async componentDidMount(){
        if (!(await loggedIn())) this.props.history.push('/login');
    }

    render() {
        return (
            <div> 
                <h3>Profile:</h3>
                {/* <p>{JSON.stringify(this.props.user)}</p> */}
                <p>First Name: {this.props.user.firstName}</p>
                <p>Last Name: {this.props.user.lastName}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Username: {this.props.user.username}</p>
                <img src={`${API_URL}/images/${this.props.user.image}`} alt="Profile"/>
            </div>
        );
    }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
    onSetUser: user => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
