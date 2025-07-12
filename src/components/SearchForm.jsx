import axios from 'axios';
import React, { useState } from 'react'

const SearchForm = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}`);

      console.log(data);
    } catch (error) {
      console.log(error);
    }


    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }
  return (
    <div className='search-form'>

      {
        isLoading ? (
          <div className="search-img">
            <img src="https://media.tenor.com/A15H8E1VUh8AAAAM/github-cat.gif" alt="" />
          </div>
        ) : (
          <form action="" onSubmit={handleSubmit}>
            <h3>Welcome <br /> To GitHubGround</h3>
            <div className="form-control">
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Search A GitHub Account' />
            </div>
            <div className="btn-control">
              <button type='submit'>Search</button>
            </div>
          </form>
        )
      }





    </div>
  )
}

export default SearchForm