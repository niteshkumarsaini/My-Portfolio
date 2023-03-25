import React from 'react'
import {NavLink } from 'react-router-dom';

const Nabvar = () => {
  return (
    <>
      <navbar className='navbar'>
        <div className="navHeading">

          <div className='heading'><h2 style={{ color: "red" }}>N</h2><h2>itesh.</h2></div>
        </div>
        <ul className='ulContainer'>
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

export default Nabvar
