import React from 'react'
import ServiceData from './ServiceApi'
import Nabvar from './Nabvar';
const Myservices = () => {
const [service,setService]=React.useState(ServiceData);
  return (
   <>
   <Nabvar/>
   <div className="ServicesContiner">
   <div className="thirdHeadingCont">
        <h1 className="thirdHeading">My Services</h1>
    </div>
    <div className="serviceDisplay">
       
       {
service.map((data,index)=>{
    return(
        <>
         <div className="ServiceBox" key={index}>
           <div className="boxContainer">
            <i class={data.icon}></i>
            <div className="headingCon">

            <h1 className="boxHeading">{data.Name}</h1>
            </div>
            <p className="boxPara">{data.para}</p>

            </div>
            </div>
            

        </>
    )

})


       }
         
       
    
    </div>
   </div>
   
   
   </>
  )
}

export default Myservices
