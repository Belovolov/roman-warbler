import React, { Component } from 'react';
import {Redirect} from 'react-router';

class Signup extends Component {
    static defaultProps = {
        onSubmit: ()=>{},
        message: ''
    }
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            imageUrl: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        const {value, name} = e.target
        this.setState((prev)=>{
            prev[name]=value
            return prev
        })
    }
    onSubmit(e) {
        e.preventDefault()
        this.props.onSubmit({...this.state})
    }
    
    render() {
        const {email,username,password,imageUrl} = this.state
        const {message} = this.props
        const redirectTo = this.props.location.state ? this.props.location.state.referrer:null
        return this.props.user
            ? <Redirect to={redirectTo||'/'}/>
            : (<div>
                <h4>Join warbler today</h4>
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
                           onChange={this.onChange}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputUsername1">Username</label>
                    <input type="text"
                           name="username"
                           className="form-control" 
                           id="exampleInputUsername1" 
                           placeholder="Username"
                           value={username} 
                           onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                           name="password"
                           className="form-control"
                           id="exampleInputPassword1"
                           placeholder="Password"
                           value={password} 
                           onChange={this.onChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputUrl1">Image URL</label>
                    <input type="text"
                           name="imageUrl"
                           className="form-control" 
                           id="exampleInputUrl1" 
                           placeholder="Image URL"
                           value={imageUrl} 
                           onChange={this.onChange}/>
                  </div>
                  <button type="submit" className="btn btn-primary" >Sign up</button>
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
export default Signup