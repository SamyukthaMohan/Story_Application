import React, { useEffect, useState } from 'react'
import './Details.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Details() {

    const[storyId,setstoryId]=useState("");
    const[authorName,setauthorName]=useState("");
    const[storyTitle,setstoryTitle]=useState("");
    const[description,setDescription]=useState("");
    const[imageurl,setImageUrl]=useState("");
    const[audiourl,setAudioUrl]=useState("");
    const nav=useNavigate();

    const sendtodb=(event)=>{
        event.preventDefault()
        const details={storyId,storyTitle,authorName,description,imageurl,audiourl}
        if(storyId.length===0||storyTitle.length===0||authorName.length===0||description.length===0||imageurl===0||audiourl.length===0){
          alert("Enter All fields")
        }
        else{
        fetch("http://localhost:8814/admin/posting",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(details)
        }
        ).then(()=>{
          console.log("New Detail Added");   
          console.log(JSON.stringify(details));
          console.log(event);
          
           nav("/addash")
        })
      }
    } 
    
//     const token=localStorage.getItem("jwtToken")
//   if(token===null){
//     nav("/")
   
//   }
//   const [user, setuser] = useState([]);
//   useEffect(() => {
//     const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
//     setuser(storeduser);
// },[]);

  return (
    <div className='book'> 
    <div className='bcover'></div>
    <div className='bform'>
    <form>
    <label id='headingofform'>STORY DETAILS</label>
    <label htmlform="BookId" className='bform-group bid'>
    <input type="text" className="bform-control" value={storyId}  onChange={(e) =>setstoryId(e.target.value)}  required></input>
    <span>STORY ID</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="BookName" className='bform-group btitle'>
    <input type="text" className="bform-control" value={storyTitle} onChange={(e) =>setstoryTitle(e.target.value)} required></input>
    <span>TITLE</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="authorname" className='bform-group bauthor'>
    <input type="text" className="bform-control" value={authorName} onChange={(e) =>setauthorName(e.target.value)} required></input>
    <span>AUTHOR</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="BookCategory" className='bform-group bdescri'>
    <input type="text" className="bform-control" value={description} onChange={(e) =>setDescription(e.target.value)}  required></input>
    <span>DESCRIPTION</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="imageurl" className='bform-group burl'>
    <input type="text" className="bform-control" value={imageurl} onChange={(e) =>setImageUrl(e.target.value)}  required></input>
    <span>IMAGE URL</span>
    <span className='bborder'></span>
    </label>
    <label htmlform="audiourl" className='bform-group audiourl'>
    <input type="text" className="bform-control" value={audiourl} onChange={(e) =>setAudioUrl(e.target.value)}  required></input>
    <span>AUDIO URL</span>
    <span className='bborder'></span>
    </label>
    <button  type='submit' onClick={sendtodb} id="bdsubmit">SUBMIT</button>
    <Link to="/addash"><button  type='click' id="bddash">DASHBOARD</button></Link>
    </form>
    </div>
    </div>
  )
}

export default Details