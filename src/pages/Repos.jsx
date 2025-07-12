import React from 'react'
import { useSelector } from 'react-redux'

const Repos = () => {
  const user = useSelector(state=>state.user);
  console.log(user);
  return (
    <div>Repos</div>
  )
}

export default Repos