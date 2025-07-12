import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { clearUser, setUser } from '../redux/features/userSlice';
import { useNavigate } from 'react-router-dom';

import "../css/SearchForm.css"
import { errorToast, successToast } from '../toasts/toasts';

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

      // console.log(data);
      successToast(`${data.name} Profile Fetched!`)

      const userData = {
        avatar_url: data.avatar_url,
        bio: data.bio,
        followers: data.followers,
        following: data.following,
        login: data.login,
        name: data.name,
        public_repos: data.public_repos,
        repos_url: data.repos_url,
        html_url: data.html_url,
      };

      dispatch(setUser(userData));
      navigate("/ground");

    } catch (error) {
      // console.log(error.response?.status);

      errorToast(`${error.response?.status} User Not Found!`);
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
            <img src="https://assets-v2.lottiefiles.com/a/e372720e-6605-11ee-871a-8f8eda2d921c/3voaK5KS17.gif" alt="" />
          </div>
        ) : (
          <form action="" onSubmit={handleSubmit}>
            <h2>Welcome</h2>
            <h3 className='flex-center'>To <span>GitHubGround</span></h3>
            <hr />

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