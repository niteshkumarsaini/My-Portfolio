import React from 'react'
import Navbar from './Navbar'

const Main = () => {

  function cvDownload(){
    window.open('document/RESUME.pdf','_blank')

  }
  return (
  <>
  <Navbar/>
  <div className="middleSection">
<div className="leftCont">
  <div className="upperText">
    <h2 className="upperHeading">Web Developer</h2>
  </div>
  <div className="lowerText">
    <p>Hi, I'm <span style={{color:"red"}}>Nitesh</span></p>
    <p>Kumar From Kashipur</p>
    <button className='downloadResume' onClick={()=>cvDownload()}>Download CV</button>

  </div>

</div>

<div className="rightCont">
<div className="imageCont">
  <img src="images/im.jpg" alt="" id='image'/>

</div>
</div>
  </div>
  
  
  </>
  )
}

export default Main
