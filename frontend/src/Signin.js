import React, { Component } from 'react';
import {Redirect} from 'react-router';
import './Signin.css'

class Signin extends Component {
    static defaultProps = {
        onSubmit: ()=>{},
        user: null
    }
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    onChange = (e) => {
        const {value, name} = e.target
        this.setState((prev)=>{
            prev[name]=value
            return prev
        })
    }
    onSubmit = (e) => {
        const {email, password } = this.state
        e.preventDefault();
        this.props.onSubmit({email,password})
    }
    render() {
        const {email, password } = this.state
        const {message} = this.props
        console.log(this.props.location)
        const redirectTo = this.props.location.state ? this.props.location.state.referrer:null
        return this.props.user
            ? <Redirect to={redirectTo||'/'}/>
            : (<div>
                <h4>Welcome back!</h4>
                
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                            name="email"
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                            value={email} 
                            onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                            name="password"
                           className="form-control"
                           id="exampleInputPassword1" 
                           placeholder="Password" 
                           value={password}
                           onChange={this.onChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                {(message)
                    ? <div className="alert alert-danger fadeout" role="alert" style={{marginTop: "1em"}}>
                        {message}
                      </div> 
                    : null}
            </div>
        )
    }
}
export default Signin