import React from 'react'
import Main from './components/Main';
import About from './components/About';
import Mywork from './components/Mywork';
import Myservices from './components/Myservices';
import Contact from './Contact';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';



import './App.css';



const App = () => {

  return (
    <div>
<<<<<<< HEAD
<Router basename='/My-Portfolio/'>
=======
<Router basename="My-Portfolio">
>>>>>>> afd9b4272076c14cc8d6ff18a9745cc47d9a88ae
<Routes>
<Route path='/My-Portfolio' element={<Main/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/services' element={<Myservices/>}></Route>
<Route path='/portfolio' element={<Mywork/>}></Route>
<Route path='/services' element={<Myservices/>}></Route>
<Route path='/contact' element={<Contact/>}></Route>

</Routes>
</Router>


 </div>
  )
}

export default App
