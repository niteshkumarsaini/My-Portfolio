import React from 'react'
import {NavLink } from 'react-router-dom';

const Navbar = () => {
  function hambar(){
   if(document.getElementById('ulCont').style.display==='' || document.getElementById('ulCont').style.display==="none"){
document.getElementById('ulCont').style.display="flex";
console.log("display")
   }
else{
  document.getElementById('ulCont').style.display="none";
}
  }
  return (
    <>
      <navbar className='navbar'>
        <div className="navHeading">
        <div className="hamburger" >
        <i class="fa-solid fa-bars" onClick={()=>{hambar()}}></i>
        </div>
          <div className='heading'><h2 style={{ color: "red" }}>N</h2><h2>itesh.</h2></div>
         
        </div>
        <ul className='ulContainer' id='ulCont'>
          <li><NavLink className='links' to="/" >Home</NavLink></li>
          <li><NavLink className='links' to="/about" >About</NavLink></li>
          <li><NavLink className='links' to="/services" >Services</NavLink></li>
          <li><NavLink className='links' to="/portfolio" >Portfolio</NavLink></li>
          <li><NavLink className='links' to="/contact" >Contact</NavLink></li>
        </ul>
       
      </navbar>

    </>
  )
}

export default Navbar
