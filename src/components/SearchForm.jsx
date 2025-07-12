import React from 'react'

const SearchForm = () => {
  return (
    <div className='search-form'>

      <div className="search-img">
        <img src="https://media.tenor.com/A15H8E1VUh8AAAAM/github-cat.gif" alt="" />
      </div>
      <form action="">
        <h3>Welcome <br /> To GitHubGround</h3>

<div className="form-control">
        <input type="text" placeholder='Search A GitHub Account' />
</div>

<div className="btn-control">
  <button type='submit'>Search</button>
</div>

      </form>
      {/* <hr /> */}
    </div>
  )
}

export default SearchForm