import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../../redux/actions';
import { loggedIn, getUser } from '../../utils/user';
import { API_URL } from '../../constants';
import Image from './Image';

import '../../styles/profile.css';

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = { editImage: false }
        this.onUpload = this.onUpload.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    async componentDidMount(){
        if (!(await loggedIn())) this.props.history.push('/login');
    }

    async toggleEdit(){ this.setState({ editImage: !this.state.editImage }); }

    async onUpload(){
        this.toggleEdit();
        const user = await getUser();
        this.props.onSetUser(user);
    }
    
    render() {
        const imgUrl = this.props.user.image ? `${API_URL}/images/${this.props.user.image}` : './images/user.png';
        return (
            <div id="profile">
                <div id="info"> 
                    <div>
                        <h4>Profile:</h4> <hr />
                        <p>Name: {this.props.user.firstName} {this.props.user.lastName}</p>
                        <p>Email: {this.props.user.email}</p>
                        <p>Username: {this.props.user.username}</p>
                    </div>
                    <Image src={imgUrl} onUpload={this.onUpload} edit={this.state.editImage} toggleEdit={this.toggleEdit} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = dispatch => ({
    onSetUser: user => dispatch(setUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
