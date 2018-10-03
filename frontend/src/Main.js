import React, {Component} from 'react';
//import * as apiCalls from './apiCalls'
import './Navbar.css'
import MessageBoard from './MessageBoard'
import ProfileCard from './ProfileCard'
import NewMessageForm from './NewMessageForm'
import {requestMessages,msgFormNew,postMessage} from './actions'
import {connect} from 'react-redux'

class Main extends Component {
    componentWillMount() {
        this.props.fetchMessages()
    }
    render() {
        const {user} = this.props
        return (
        <div className="main-content">
            {this.props.showFormNew
                    ? (<NewMessageForm onClose={()=>this.props.msgFormNew(false)} onSave={(text)=>this.props.postMessage({user,text})}/>)
                    : null    
                }
            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <ProfileCard user={{name:user.username, imageUrl: user.profileImageUrl}}/>
                <MessageBoard messages={this.props.messages} isLoading={this.props.isLoading}/>
            </div>
        </div>
        )
    }
}
const mapStateToProps = (state) => ({
  showFormNew: state.showFormNew,
  messages: state.messages,
  isLoading: state.isMsgLoading,
  user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    fetchMessages: ()=> dispatch(requestMessages()),
    postMessage: ({user, text})=>dispatch(postMessage({user, text})),
    msgFormNew: (bool) => dispatch(msgFormNew(bool))
})

export default connect(mapStateToProps,mapDispatchToProps)(Main)