//import './App.css'
//import Login from './Pages/Login/Login'
//import Registration from './Pages/Registration/Registration'
import Home from './Pages/Home/home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer/footer'
import CategoryBlogs from './Pages/CategoryBlogs/categoryblog'
import Dedicated from './Pages/DedicatedBlog/Dedicatedblog' 
import Login from './Pages/Login/Login'
import Registration from './Pages/Registration/Registration'
import {Routes,Route} from 'react-router-dom'



function App() {


  return (
    <>
    <Navbar />
  <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Registration />} />
      <Route path='/Blogs/:category' element={<CategoryBlogs />} />
      <Route path='/Blogs/:id' element={<Dedicated />} />
    </Routes>
    <Footer />

    
     
    </>
  )
}

export default App
