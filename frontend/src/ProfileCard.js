import React from 'react'

const ProfileCard = function(props) {
    const {user} = props
    return (
        <aside className="col-sm-4" id="home-aside">
            <div className="panel panel-default">
              <div className="panel-body">
                <img src={user.imageUrl} alt={user.name} id="profile-image" width="100%"/>
                <div className="row text-center">
                </div>
              </div>
            </div>
          </aside>
    )
}

export default ProfileCard