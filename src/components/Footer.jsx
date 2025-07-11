import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <div>
        <p>GitHubGround Powered By Rajdev Yadav &copy; {date.getFullYear()} </p>
    </div>
  )
}

export default Footer