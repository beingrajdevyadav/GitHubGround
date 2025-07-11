import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Home = () => {
    const [username, setUsername] = useState("");

    const fetchGitHubUser = async (username) =>{
       

        try {

            const {data} = await axios.get(`https://api.github.com/users/${username}`);
            console.log(data);
            
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
<input type="text" placeholder='Enter User Name' value={username} onChange={(e)=>{setUsername(e.target.value)}} />

<button onClick={()=>fetchGitHubUser(username)}>Search</button>
        </div>
    )
}

export default Home