import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { useSelector } from 'react-redux'
import "../css/Ground.css"

const Ground = () => {
    const user = useSelector((state) => state.user);
    console.log(user);

    const viewProfile = () => {
        window.open(user.html_url, "_blank");
    };


    return (
        <div className='ground'>
            <div className="infos">
                <button className='back-btn'><i className="fa-solid fa-arrow-left"></i></button>
                <div className="profile-pic">
                    <img src={user.avatar_url} alt="" />
                </div>

                <div className="profile-info">
                    <h1>{user.name}</h1>
                    <p className='light'>{user.login}</p>
                    <p>{user.bio}</p>

                    <hr />
                </div>

                <div className="profile-actions">
                    <button>Public Repos {user.public_repos}</button>
                    <button onClick={viewProfile}>View Profile</button>
                </div>


            </div>
            <div className="reports">

                <div className="report">
                    <h2>GitHub Activity Graph</h2>
                    <img src={`https://github-readme-activity-graph.vercel.app/graph?username=${user.login}&theme=react-dark`} alt="" />
                </div>

                <div className="report">
                    <h2>GitHub Profile Summary</h2>
                    <img  src={`http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${user.login}&theme=github_dark`} alt="" />
                </div>



                <div className="report2">
                    <img src={`https://github-readme-stats.vercel.app/api?username=${user.login}&show_icons=true&theme=github_dark`} alt="" />

                    <img src={`https://streak-stats.demolab.com?user=${user.login}&theme=dark`} alt="" />
                </div>

                <div className="report">
                    <h2>GitHub Overview</h2>
                </div>

                <div className="report2">
                    <img src={`http://github-profile-summary-cards.vercel.app/api/cards/stats?username=${user.login}&theme=github_dark`} alt="" />


                    <img src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${user.login}&theme=github_dark&utcOffset=8`} alt="" />
                </div>


                <div className="report">
                    <h2>GitHub Calendar</h2>
                </div>

                <GitHubCalendar style={{ width: "100%" }} username={user.login} />

            </div>
        </div>
    )
}

export default Ground