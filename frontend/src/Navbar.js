import React from 'react'
import logo from './chicken.png'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

const Navbar = (props)=> {
    const {currentUser, showNewMessage, onSignOut} = props
    console.log(currentUser)
    return (
        <nav className="navbar-my">
          <NavLink className="navbar-brand-my" to="/">
            <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
                 Warbler
          </NavLink>
            {currentUser
              ? (<ul className="navbar-nav-my">
                  <li className="nav-item-my">
                    <img src={currentUser.profileImageUrl} alt={currentUser.username} height="50px" weight="50px"/>
                  </li>
                  <li className="nav-item-my">
                    <a className="nav-link-my" onClick={()=>showNewMessage(true)}>New message</a>
                  </li>
                  <li className="nav-item-my">
                    <a className="nav-link-my" onClick={onSignOut}>Sign out</a>
                  </li>
                </ul>)
              : (<ul className="navbar-nav-my">
                  <li className="nav-item-my">
                    <NavLink className="nav-link-my" activeClassName="active" to="/signin">Sign in</NavLink>
                  </li>
                  <li className="nav-item-my">
                    <NavLink className="nav-link-my" activeClassName="active" to="/signup">Sign up</NavLink>
                  </li>
                </ul>)
            }
            
          
        </nav>
    )
}

export default Navbar