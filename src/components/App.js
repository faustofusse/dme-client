import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { setToken, getUser } from '../redux/actions/index';
import { connect } from 'react-redux';
import Home from './home/Home';
import Profile from './profile/Profile';
import Login from './auth/Login';
import Register from './auth/Register';
import Verify from './auth/Verify';
import Header from './layout/Header';
import Page from './page/Page';
import PrivateRoute from './routes/PrivateRoute';
import Loading from './loading/Loading';
import '../styles/styles.css';
import '../styles/auth.css';

const App = (props) => {
    const logged = props.token !== null;

    useEffect(() => {
        if (!props.token){
            const token = localStorage.getItem('x-auth-token');
            if (!token) return;
            props.onSetToken(token);
            props.getUser(token);
        }
    }, []);

    return (
        <BrowserRouter>
            <Loading/>
            <Header/>
            <Switch>
                <Route exact path="/" render={Home} />
                <PrivateRoute exact path="/login" condition={!logged} redirect={'/profile'} component={Login} />
                <PrivateRoute exact path="/register" condition={!logged} redirect={'/profile'} component={Register} />
                <PrivateRoute exact path="/profile" condition={logged} redirect={'/login'} component={Profile} />
                <Route exact path="/verify/:token" render={(props) => (<Verify {...props}/>)} />
                <Route exact path="/:username" render={(props) => (<Page {...props}/>)} />
            </Switch>
        </BrowserRouter>
    );
}

const mapStateToProps = state => ({ token: state.token, user: state.user });
const mapDispatchToProps = { getUser, onSetToken: token => dispatch => dispatch(setToken(token)) };
export default connect(mapStateToProps, mapDispatchToProps)(App);