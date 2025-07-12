import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { useSelector } from 'react-redux'

const Ground = () => {
    const user = useSelector((state) => state.user);
    console.log(user);

    const viewProfile = () => {
        window.open(user.html_url, "_blank");
    };


    return (
        <div className='ground'>
            <div className="infos">
                <div className="profile-pic">
                    <img src={user.avatar_url} alt="" />
                </div>

                <h2>{user.name}</h2>
                <p>{user.login}</p>

                <p>{user.bio}</p>

                <button onClick={viewProfile}>View Profile</button>

                <GitHubCalendar username={user.login} />
            </div>
            <div className="reports">

<img src={`https://github-readme-activity-graph.vercel.app/graph?username=${user.login}&theme=react-dark`} alt="" />

                <img src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${user.login}&theme=github_dark`} alt="" />
            </div>
        </div>
    )
}

export default Ground