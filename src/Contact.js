import React from 'react'
import Nabvar from './components/Nabvar'

const Contact = () => {
  function cvDownload(){
    console.log("J")
    window.open('document/RESUME.pdf','_blank')

  }
  function socialLink(id){
    if(id===1){
      window.open('https://github.com/niteshkumarsaini','_blank')
    }
    else if(id===2){
     
      window.open('https://instagram.com/mr_nitesh_saini_?igshid=YmMyMTA2M2Y=','_blank');

    }
    else{
      window.open('https://www.linkedin.com/in/niteshkumar--/','_blank')

    }

  }
  return (
   <>
   <Nabvar/>
   <div className="ContactDiv">
    <div className="leftContact">
      <div className="dataContainer">
        <div className="headingContainer">
          <h1 className="contactMe">Contact Me</h1>
        </div>
        <div className="infoContainer">
          <div className="emailContainer">
          <i class="fa-solid fa-envelope iController"></i>
          <p className="emailP">Niteshsaini1296@gmail.com</p>
            
          </div>
          <div className="phoneContainer">
          <i class="fa-solid fa-phone iController"></i>
          <p className="mphone">+91 8077911512</p>


          </div>
          <div className="socialMedia">
          <i class="fa-brands fa-github iController2" onClick={()=>socialLink(1)}></i>
          <i class="fa-brands fa-instagram iController2" onClick={()=>socialLink(2)}></i>
          <i class="fa-brands fa-linkedin iController2" onClick={()=>socialLink(3)}></i>


          </div>
          <div className="resumeBtn">
            <button className="downloadCV" onClick={()=>cvDownload()}>Download CV</button>

          </div>
        </div>
      </div>

    </div>
    <div className="rightContact">
      <div className="inputD">
      <input type="text" className='inputContact' placeholder='Enter Your Name' />
      <input type="text" className='inputContact' placeholder='Enter Your Email'/>
      <textarea name="" cols="30" rows="8" className='inputTextArea' placeholder='Enter Your Message'></textarea>
      </div>
      <div className="btnOuter">
      <button className="submitBtn">Submit</button>
      </div>
    </div>

   </div>
   
   </>
  )
}

export default Contact
