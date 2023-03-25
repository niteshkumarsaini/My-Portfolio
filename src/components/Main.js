import React from 'react'
import Nabvar from './Nabvar'

const Main = () => {
  return (
  <>
  <Nabvar/>
  <div className="middleSection">
<div className="leftCont">
  <div className="upperText">
    <h2 className="upperHeading">Web Developer</h2>
  </div>
  <div className="lowerText">
    <p>Hi, I'm <span style={{color:"red"}}>Nitesh</span></p>
    <p>Kumar From Kashipur</p>

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
