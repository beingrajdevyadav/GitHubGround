import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Repos = () => {
  const user = useSelector(state => state.user);
  console.log(user);

  const [repos, setRepos] = useState([]);


  const fetchRepos = async () => {
    try {
      const { data } = await axios.get(`${user.repos_url}`);
      setRepos(data);
      // console.log(data);
    } catch (error) {
      console.log(error.response?.status);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);
  return (
    <div className='repos'>
      <div className="user-info">
        <img src={user.avatar_url} alt="" />

        <div className="user-details">
          <h2>{user.name}</h2>
          <p>{user.login}</p>
          <p>{user.bio}</p>
        </div>
      </div>

      <div className="repos-list">
        {
          repos?.map((rep, i) => (
            <div className='repo' key={i}>
              <h4>{rep.name}</h4>
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