import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearUser, setUser } from '../redux/features/userSlice';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(clearUser())

    setIsLoading(true);
    try {
      const { data } = await axios.get(`https://api.github.com/users/${username}`);

      console.log(data);
      const userData = {
        avatar_url: data.avatar_url,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        repos_url: data.repos_url
      };

      dispatch(setUser(userData));
      navigate("/repos");

    } catch (error) {
      console.log(error.response?.status);
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
            <h3>Welcome</h3>
            <h3 className='flex-center'>To <span>GitHubGround</span></h3>
            

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