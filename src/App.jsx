
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
console.log(user);

if(user){
  console.log("User Exists!")
}else{
  console.log("User Doesn't Exist!!");
}
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
