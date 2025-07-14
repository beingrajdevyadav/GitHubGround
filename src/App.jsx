
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Repos from './pages/Repos'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Ground from './pages/Ground'
import { useSelector } from 'react-redux'

function App() {
const user = useSelector(state=>state.user.name);

  return (
    <>

    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ground' element={user ? <Ground /> : <Home/>} />
        <Route path='/repos' element={user ? <Repos /> : <Home/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
