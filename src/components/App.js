import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home/Home';
import Profile from './home/Profile';
import Login from './auth/Login';
import Register from './auth/Register';
import Header from './layout/Header';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions/index';
import '../styles/styles.css';
import { getUser, loggedIn } from '../utils/user';

class App extends React.Component {
    async componentDidMount(){
        if (await loggedIn()) {
            const user = await getUser();
            this.props.onSetUser(user);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" render={Home} />
                    <Route exact path="/login" render={(props) => (<Login {...props}/>)} />
                    <Route exact path="/register" render={(props) => (<Register {...props}/>)} />
                    <Route exact path="/profile" render={(props) => (<Profile {...props}/>)} />
                </Switch>
            </BrowserRouter>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onSetUser: user => dispatch(setUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
