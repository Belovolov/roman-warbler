import React from 'react';
import {Route,Redirect} from "react-router-dom"
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, user, componentProps,...restProps}) => (
  //if authenticated, go to Component else redirect to sign-in
  <Route {...restProps} render={(props)=>(
      ( user )
      ? <Component {...props} {...componentProps}/>
      : <Redirect to={{
          pathname: '/signin',
          state: {referrer: props.location}
      }}/>
  )}/>
)
const mapStateToProps = (state) => ({
  user: state.user  
})
export default connect(mapStateToProps,null)(PrivateRoute)