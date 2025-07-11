import React from 'react'
import { toast } from 'react-toastify'

const Home = () => {
  return (
    <div>

        <button onClick={()=>{toast.success("Clicked!")}}>Click Me</button>
        <button onClick={()=>{toast.error("Clicked!")}}>Click Me</button>
    </div>
  )
}

export default Home