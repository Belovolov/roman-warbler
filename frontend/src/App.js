import React, { Component } from 'react';
import {Route,Switch,withRouter} from "react-router-dom"
import {connect} from 'react-redux';
import Signin from './Signin'
import Signup from './Signup'
import Navbar from './Navbar'
import Main from './Main'
import PrivateRoute from './PrivateRoute'
//import 'bootstrap/dist/css/bootstrap.min.css';
import {requestAuth, requestSignup,logoutUser,msgFormNew} from './actions'

class App extends Component {
  render() {
    const {user, message, signIn, signUp, signOut, newMessage} = this.props
    return (
      <div className="app">
        <Navbar currentUser={user} onSignOut={signOut} showNewMessage={newMessage}/>
        <div style={{display: "flex", justifyContent: "center", padding: "1vw"}}>
          <Switch>
            <Route path="/signin" render={(props)=><Signin {...props} onSubmit={signIn} message={message} user={user}/>}/>
            <Route path="/signup" render={(props)=><Signup {...props} onSubmit={signUp} message={message} user={user}/>}/>
            <PrivateRoute exact={true} path="/" component={Main}/>
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state)=>({
  user: state.user,
  message: state.authMessage
})

const mapDispatchToProps = (dispatch) => ({
  signIn: ({email, password}) => dispatch(requestAuth({email, password})),
  signUp: ({email, username, password, imageUrl}) => dispatch(requestSignup({email, username, password, imageUrl})),
  signOut: ()=> dispatch(logoutUser()),
  newMessage: (bool) => dispatch(msgFormNew(bool))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));