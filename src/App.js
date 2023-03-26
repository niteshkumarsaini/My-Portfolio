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
<Router basename="My-Portfolio">
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
