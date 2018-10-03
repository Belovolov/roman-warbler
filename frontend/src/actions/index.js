export const setAuthMessage = (message) => ({
  type: "SET_AUTH_MESSAGE",
  authMessage: message
})
export const msgFormNew = (bool) => ({
  type: "SHOW_NEWMSG_FORM",
  showFormNew: bool  
})

export const msgSetMessages = (messages) => ({
  type: "SET_MESSAGES",
  messages
})

export const msgIsLoading = (bool) => ({
  type: "SET_MSG_LOADING",
  isMsgLoading: bool
})

export const authUser = (user)=>({
  type: "AUTH_USER",
  user
})

export const logoutUser = (user)=>({
  type: "LOGOUT_USER"
})

export const postMessage = ({user, text})=>{
  return (dispatch) => {
    dispatch(setAuthMessage(''))
    fetch(`/api/user/${user.userId}/messages`, {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
              'Authorization': 'Token '+user.token
          },
          body: JSON.stringify({text})
        })
        .then(res=>{
          if (!res.ok) {
              if ((res.status<=400)&&(res.status<500)) {
                  res.json().then(data => console.log(data.message))
              }
              else throw new Error('Server is not responding. Try later')
          }
          else {
              return res.json().then(message=>{
                  dispatch(requestMessages())
              })
          }
        })
        .catch(error => console.log(error))
  }
}

export const requestMessages = ()=>{
  console.log('requesting messages')
  return (dispatch)=>{
    console.log('in dispatch')
    dispatch(msgIsLoading(true))
    fetch('/api/messages')
            .then(res => {
              if (!res.ok) {
                console.log('not ok')
                if ((res.status<=400)&&(res.status<500)) {
                    return res.json(data => {throw new Error(data.message)})
                }
                else throw new Error('Server is not responding. Try later')
              }
              else {
                console.log('ok')
                return res.json()
              }
            })
            .then(messages=>{
                let msgArray = messages.map(message=>({id: message._id,
                                                         imageUrl: message.userId.profileImageUrl,
                                                         username: message.userId.username,
                                                         date: message.createdAt,
                                                         text: message.text}))
                dispatch(msgIsLoading(false))
                dispatch(msgSetMessages(msgArray))
            })
            .catch(error => console.log(error))
  }
}

export const requestAuth = ({email, password}) => {
  return (dispatch) => {
    dispatch(setAuthMessage(''))
    fetch('/api/auth/signin', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({email, password})
        })
        .then(res=>{
          if (!res.ok) {
              if ((res.status<=400)&&(res.status<500)) {
                  res.json().then(data => dispatch(setAuthMessage(data.message)))
              }
              else throw new Error('Server is not responding. Try later')
          }
          else {
              return res.json().then(user=>{
                  dispatch(authUser(user))
                  setUserToStore(user)
              })
          }
        })
        .catch(error => console.log(error))
  }
}

export const requestSignup = ({email, username, password, imageUrl}) => {
  return (dispatch) => {
    dispatch(setAuthMessage(''))
    fetch('/api/auth/signup', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify({email, username, password, imageUrl})
        })
        .then(res=>{
          if (!res.ok) {
              if ((res.status<=400)&&(res.status<500)) {
                  res.json().then(data => dispatch(setAuthMessage(data.message)))
              }
              else throw new Error('Server is not responding. Try later')
          }
          else {
              return res.json().then(user=>{
                  dispatch(authUser(user))
                  setUserToStore(user)
              })
          }
        })
        .catch(error => console.log(error))
  }
}

export const getUserFromStore = () => {
    try {
        return JSON.parse(localStorage.getItem("WARBLER_CURRENT_USER"))
    }
    catch(e) {
        return undefined
    }
}

export const setUserToStore = (user) => {
    localStorage.setItem("WARBLER_CURRENT_USER", JSON.stringify(user))
}

export const clearUserInStore = () => {
    localStorage.removeItem("WARBLER_CURRENT_USER")
}

