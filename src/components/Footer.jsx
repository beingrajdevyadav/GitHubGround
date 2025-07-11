import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <div className='footer'>
        <p>GitHubGround Powered By Rajdev Yadav  </p>
        <p> All Rights Reserved &copy; {date.getFullYear()}</p>
    </div>
  )
}

export default Footer