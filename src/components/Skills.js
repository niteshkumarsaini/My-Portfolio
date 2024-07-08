import React from 'react'
const Skills = ({ mybtn }) => {
    const [edBtn, setEdBtn] = React.useState(1);


    function ChangeColor(id) {
        const collection = document.getElementsByClassName('edButton');
        console.log(collection[id])
        for (var i = 0; i < collection.length; i++) {
            if (i === id) {
                collection[i].style.color = "red";

            }
            else {
                collection[i].style.color = "white";
            }
        }
    }
    if (mybtn === 1) {
        return (
            <SkillsProg />
        )
    }
    else if (mybtn === 2) {
        return (
            <Hobbies />

        )
    }
    else {
        return (
            <>
                <Education edbt={edBtn} />
                <div className="eduBtn">
                    <div className="edButton" onClick={() => { setEdBtn(1); ChangeColor(0); }} style={{ color: "red" }}>1</div>
                    <div className="edButton" onClick={() => { setEdBtn(2); ChangeColor(1) }}>2</div>
                    <div className="edButton" onClick={() => { setEdBtn(3); ChangeColor(2) }}>3</div>


                </div>


            </>
        )
    }


}

const SkillsProg = () => {
    function openCertificate(id){
        if(id===1){
            window.open('document/Python.pdf','_blank');
    
        }
        else if(id===2){
            window.open('document/java.pdf','_blank');
    
        }
        else if(id===3){
            window.open('document/React.pdf','_blank');
    
        }
        else if(id===4){
            window.open('document/javaIn.pdf','_blank');
        }
        else{
            window.open('document/co.pdf','_blank');
        }
    }
    
    
    

    return (
        <>
            <div className="skill-">
                <p id='p1'>Programming Languages</p>
                <p id='p2'>Javascript , Java , Python</p>
                <p id='p1'>Frameworks / Library</p>
                <p id='p2'>React , Node.js , Bootstrap , Express.js</p>
                <p id='p2' style={{ marginTop: "1vh" }}>JSP/Servlet , JFrames</p>
                <p id='p1'>Tools</p>
                <p id='p2' >HTML , CSS , My SQL , After Effect</p>
                <p id='p1'>Certificates (Links)</p>
                <p id='p2' style={{display:"flex"}}><p className='pCertificate' onClick={()=>{openCertificate(1)}}>Python</p> ,<p style={{marginLeft:"1vh"}} className='pCertificate' onClick={()=>{openCertificate(2)}}>Java Training</p>,<p className='pCertificate' style={{marginLeft:"1vh"}} onClick={()=>{openCertificate(3)}}>React Js</p></p>
                <p id='p2' style={{ marginTop: "1vh",display:"flex"}} ><p className='pCertificate' onClick={()=>{openCertificate(4)}}>Java Internship</p>,<p className='pCertificate' style={{marginLeft:"1vh"}} onClick={()=>{openCertificate(5)}}>Ambassador Program</p></p>

            </div>

        </>
    )

}

const Hobbies = () => {
    return (
        <>
            <div className="skill-">
                <p id='p1'>Coding , Travelling</p>
                <p id='p2' style={{ marginTop: "1vh" }}>Editing , Exploring</p>

            </div>

        </>
    )
}

const Education = ({ edbt }) => {
    if (edbt === 1) {
        return (
            <EduPart1 />
        )

    }
    else if (edbt === 2) {
        return (
            <EduPart2 />
        )

    }
    else {
        return (
            <EduPart3 />
        )

    }



}



const EduPart1 = () => {
    return (
        <>
            <div className="skill-">
                <p id='p1' style={{ fontSize: "1.2em", fontWeight: "500", color: "white" }}>B.Tech</p>
                <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>College :</span> College of Enginnering Roorkee</p>
                <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>Branch :</span> Computer Science & Engineering</p>
                <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>CGPA :</span> 7.40</p>
                <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>Passout :</span> 2023</p>
            </div>
        </>
    )
}

const EduPart3 = () => {
    return (
        <>
            <div className="skill-">
                <p id='p1' style={{ fontSize: "1.2em", fontWeight: "500", color: "white" }}>Xth</p>
                <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>School :</span> DAV Public School (Kashipur)</p>
                <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>Board :</span>C.B.S.E</p>
                <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>CGPA :</span> 7.40</p>
                <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>Passout :</span> 2017</p>
            </div>

        </>




    )
}

const EduPart2 = () => {
    return (
        <>
         <div className="skill-">
            <p id='p1' style={{ fontSize: "1.2em", fontWeight: "500", color: "white" }}>XIIth</p>
            <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>School :</span> DAV Public School</p>
            <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>Board :</span>C.B.S.E</p>
            <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>CGPA :</span>7.30</p>
            <p id='p2' style={{ marginTop: "1vh" }}><span style={{ color: "pink" }}>Passout :</span> 2019</p>
            </div>
        </>
    )
}



export default Skills
