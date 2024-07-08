import React from 'react'
import Skills from './Skills';
import Navbar from './Navbar';
const About = () => {
  const [btnstate, setBtnstate] = React.useState(1);
  function My(e) {
    const arr = document.getElementsByClassName('skillbt');
    for (var a = 0; a < arr.length; a++) {
      if (a === e - 1) {
        arr[a].id = "Myactive";
      }
      else {
        arr[a].id = a + 1;
      }
    }
  }

  return (
    <>
    <Navbar/>
      <div className="secondMain">
        <div className="secondContainer">
          <div className="aboutCont">
            <img src="images/ab7.png" alt="" style={{color:"white"}} id='aboutImage' />

          </div>
          <div className="skillsCont">
            <div className="skillHeadCont">
              <h1 className="skillHeading" style={{ color: "white" }}>About Me</h1>
            </div>
            <div className="skillpara">
              <p className='skillparaText'>I am a beginner Web Developer and Java Developer working for the
                past few years. I am always enthusiastic about new creative projects
                for which I use my imagination and skill to provide an elegant solution
                for any project. My main objective is to create beautiful digital
                products and provide unique design solutions. Always open for
                challenges that will keep me learning. Looking forward to work on
                exciting upcoming projects with innovative people</p>
            </div>
            <div className="btn">
              <button id='Myactive' className='skillbt' onClick={() => { setBtnstate(1); My(1) }}>Skills</button>
              <button className='skillbt' onClick={() => { setBtnstate(2); My(2) }}>Hobbies</button>
              <button className='skillbt' onClick={() => { setBtnstate(3); My(3) }}>Education</button>
            </div>
            <div className="skills">
              <div className="skillHeadingss">
                <Skills mybtn={btnstate} />



              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default About
