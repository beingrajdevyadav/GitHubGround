import React from 'react'
import { useSelector } from 'react-redux'

const Ground = () => {
    const user = useSelector((state)=>state.user);
    console.log(user);
  return (
    <div className='ground'>
        <div className="infos">
            <div className="profile-pic">
            <img src={user.avatar_url} alt="" />
            </div>

            <h2>{user.name}</h2>
            <p>{user.login}</p>

            <p>{user.bio}</p>

            <button>View Profile</button>
        </div>
        <div className="reports"></div>
    </div>
  )
}

export default Ground