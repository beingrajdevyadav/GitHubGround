
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Repos from './pages/Repos'
import Home from './pages/Home'

function App() {


  return (
    <>

      <h1>GitHubGround</h1>
      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/repos' element={<Repos />} />
      </Routes>
    </>
  )
}

export default App
