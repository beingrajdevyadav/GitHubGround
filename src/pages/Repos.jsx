import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "../css/Repos.css"
import { useNavigate } from 'react-router-dom';
import { infoToast } from '../toasts/toasts';
import CopyButton from '../components/CopyButton';


const Repos = () => {
  const user = useSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(false);
  // console.log(user);

  const [repos, setRepos] = useState([]);
  const navigate = useNavigate();

  const fetchRepos = async () => {
    setIsLoading(true);

    try {
      const { data } = await axios.get(`${user.repos_url}`);
      setRepos(data);
      // console.log(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);

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

  const openRepo = (url) => {
    window.open(url, "_blank");
  }

  return (
    <div className='repos'>
      <button onClick={handleBackButtonClick} className='back-btn'><i className="fa-solid fa-arrow-left"></i></button>

      <div className="user-info">
        <img src={user.avatar_url} alt="" />

        <div className="user-details">
          <h1>{user.name}</h1>
          <p className='light'>{user.login}</p>
          <p className='bio large'>{user.bio}</p>
        </div>
      </div>

      <p className='bio small'>{user.bio}</p>


      <div className="repos-header">
        <h2>Repos List</h2>
      </div>
      
      <div className="repos-list">

        {
          isLoading ? (
            <div className="repos-img">
              <img src="https://assets-v2.lottiefiles.com/a/e372720e-6605-11ee-871a-8f8eda2d921c/3voaK5KS17.gif" alt="" />
            </div>
          ) : (
            repos?.map((rep, i) => (
              <div className='repo' key={i}>
                <h2>{rep.name}</h2>
                <p>{rep.description}</p>
                <div className="repo-actions">
                  <CopyButton cloneUrl={rep.clone_url} txt={"Copy Clone URL"} />
                  <button onClick={() => openRepo(rep.svn_url)}>Open </button>

                </div>
              </div>
            )

            ))
        }
      </div>
    </div>
  )
}

export default Repos