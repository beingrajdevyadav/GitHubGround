import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "../css/Repos.css"
import { useNavigate } from 'react-router-dom';
import { infoToast } from '../toasts/toasts';


const Repos = () => {
  const user = useSelector(state => state.user);
  console.log(user);

  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();

  const fetchRepos = async () => {
    try {
      const { data } = await axios.get(`${user.repos_url}`);
      setRepos(data);
      console.log(data);
    } catch (error) {
      console.log(error.response?.status);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  const handleBackButtonClick = () => {
    infoToast("Welcome To GHG!")
    navigate("/ground");
  }

  const downloadRepo = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download");

    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='repos'>
      <button onClick={handleBackButtonClick} className='back-btn'><i className="fa-solid fa-arrow-left"></i></button>

      <div className="user-info">
        <img src={user.avatar_url} alt="" />

        <div className="user-details">
          <h1>{user.name}</h1>
          <p className='light'>{user.login}</p>
          <p>{user.bio}</p>
        </div>
      </div>


      <div className="repos-list">
        {
          repos?.map((rep, i) => (
            <div className='repo' key={i}>
              <h2>{rep.name}</h2>
              <p>{rep.description}</p>
              <div className="repo-actions">
                <button>Clone </button>
                <button>Open </button>
                <button>Download</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Repos