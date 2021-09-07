import React, { Component } from 'react';
import { getUserByUsername } from '../../utils';

const API_URL = process.env.API_URL;

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = { user: null }
    }

    async componentDidMount() {
        const username = this.props.match.params.username;
        const user = await getUserByUsername(username);
        this.setState({ user: user ? user : null });
        if (!user) setTimeout(() => this.props.history.push('/'), 2000);
    }

    render() {
        if (!this.state.user) return (<h2>User not found!</h2>)
        return (
            <div id="profile">
                <div id="info"> 
                    <div>
                        <h4>Profile:</h4> <hr/>
                        <p>Name: {this.state.user.firstName} {this.state.user.lastName}</p>
                    </div>
                    <img src={`${API_URL}/images/${this.state.user.image}`} alt={'Profile'} style={{maxWidth:'10em', marginLeft:'2em'}}/>
                </div>
            </div>
        )
    }
}
