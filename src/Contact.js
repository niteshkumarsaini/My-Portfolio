import React from 'react'
import Navbar from './components/Navbar'

const Contact = () => {
const [email,setEmail]=React.useState('');
const [name,setName]=React.useState('');
const [msg,setMsg]=React.useState('');

function submitted(){
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(name==='' || email==='' || msg===''){
    window.alert('Please Enter a Valid Details before Submit!!');

  }
  else{
    if(!(email.match(validRegex))){
      window.alert('Write Valid Email.!');
    }
    else{
    setTimeout(()=>{
      document.getElementById('dataSub').innerText="Submitted";
      setName('');
      setMsg('')
      setEmail('')
      setTimeout(()=>{
        document.getElementById('dataSub').innerText="Submit";
      },600)
    

    })
  }
}
}

  function cvDownload(){
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
   <Navbar/>
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
      <input type="text" className='inputContact' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)} />
      <input type="text" className='inputContact' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <textarea name="" cols="30" rows="8" className='inputTextArea' placeholder='Enter Your Message' value={msg} onChange={(e)=>setMsg(e.target.value)}></textarea>
      </div>
      <div className="btnOuter">
      <button className="submitBtn" id="dataSub" onClick={()=>submitted()} >Submit</button>
      </div>
    </div>

   </div>
   
   </>
  )
}

export default Contact
