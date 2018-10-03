import {clearUserInStore,setUserToStore} from '../actions'

export default (state={},action) => {
    switch (action.type) {
        case "SET_AUTH_MESSAGE":
            return {...state, authMessage: action.authMessage}
        case "SHOW_NEWMSG_FORM":
            return {...state, showFormNew: action.showFormNew}
        case "SET_MESSAGES":
            return {...state, messages: action.messages}
        case "SET_MSG_LOADING":
            return {...state, isMsgLoading: action.isMsgLoading}
        case "AUTH_USER":
            setUserToStore()
            return {...state, user: action.user}
        case "LOGOUT_USER":
            clearUserInStore()
            return {...state, user: null}
        default:
            return state
    }
    
}