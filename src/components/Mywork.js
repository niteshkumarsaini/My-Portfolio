import React from 'react'
import WorkApi from './WorkApi'
import Nabvar from './Nabvar'


const Mywork = () => {
    function seeMore(){
        window.open('https://github.com/niteshkumarsaini?tab=repositories','_blank')
    }
    const [data,setData]=React.useState(WorkApi)
function openProject(item){
    if(item.id===1){
        window.open(item.vUrl,'_blank');

    }
    else if(item.id===2){
        window.open(item.vUrl,'_blank');

    }
    else if(item.id===3){
        window.open(item.vUrl,'_blank');

    }
    else if(item.id===4){
        window.open(item.vUrl,'_blank');

    }
    else if(item.id===5){
        window.open(item.vUrl,'_blank');

    }
    else{
        window.open(item.vUrl,'_blank');
    }

}


    function mouseEntered(id){
        
        document.getElementsByClassName('imgP')[id].style.height="50vh";
        document.getElementsByClassName('imgP')[id].style.transition="height 1s ease-in";
        document.getElementsByClassName('insideCont')[id].style.visibility="visible";
        document.getElementsByClassName('insideCont')[id].style.transition="all 4.3s ease-out";
    
    }
    function mouseLeaved(id){
        document.getElementsByClassName('imgP')[id].style.height="0vh";
    document.getElementsByClassName('imgP')[id].style.transition="height 1s ease-in";
    document.getElementsByClassName('insideCont')[id].style.visibility="hidden";
    document.getElementsByClassName('insideCont')[id].style.transition="all 1.3s ease-in"


    }


  return (
   <>
   <Nabvar/>
   <div className="sectionThird">
    <div className="thirdHeadingCont">
        <h1 className="thirdHeading">My Work</h1>
    </div>
    <div className="projectDisplay">
   
    {
        data.map((item,index)=>{
           return(
            < >
        <div className="projectCont" onMouseEnter={()=>mouseEntered(index)} onMouseLeave={()=>mouseLeaved(index)} key={index}>
            <div className="imgP" style={{height:"0"}}>
            <div className="insideCont transp displayP">
                <div className="insh">
                <h1 className="insideConth1">{item.appName}</h1></div>
                <p className="insideContp transp">{item.about}</p>
                <div className="insideContDiv">
                <i className="fa-solid fa-arrow-up-right-from-square" style={{background:"none"}} onClick={()=>openProject(item)}></i>
                </div>
            </div>

            </div>
            <img src={item.url} className='workImage' alt=""/>
        </div>
            </>
           )



        })
    }
    </div>

    
<div className="MoreProject">
    <button className="more" onClick={()=>{seeMore()}}>See More</button>
</div>
  

   </div>
   </>
  )
}

export default Mywork
