
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Repos from './pages/Repos'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Ground from './pages/Ground'

function App() {


  return (
    <>

    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ground' element={<Ground />} />
        <Route path='/repos' element={<Repos />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
