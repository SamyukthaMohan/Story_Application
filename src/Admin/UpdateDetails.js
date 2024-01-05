import React, { useEffect, useState } from 'react'
import './UpdateDetails.css'
import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Image1 from '../Image1/word.png'
import Image2 from '../Image2/bee.png'
import Image3 from '../Image3/smart.png'
function UpdateDetails() {

    const {id}=useParams();
    const[authorName,setauthorName]=useState("");
    const[storyTitle,setstoryTitle]=useState("");
    const[description,setDescription]=useState("");
    const[imageurl,setImageUrl]=useState("");
    const[audiourl,setAudioUrl]=useState("");
    const[response,setResponse]=useState("");
    const nav=useNavigate();

   useEffect(()=>{
    const fetchById=async()=>{
      try{
        const response=await fetch(`http://localhost:8814/admin/getwithid/${id}`);
        if(!response.ok)
        {
          throw new Error('Error:'+response.status);
        }
        const data=await response.json(); 
        setstoryTitle(data.storyTitle);
        setauthorName(data.authorName);
        setDescription(data.description);
        setImageUrl(data.imageurl);
        setAudioUrl(data.audiourl);
      }catch(error){
        console.log('Error:',error);
      }
    };
    fetchById();
   },[id]);

const update=async(e)=>{
  e.preventDefault();
  try{
    const response=await fetch(`http://localhost:8814/admin/updatebyid/${id}`,
    {
      method:"PUT",
      headers:{'Content-Type':'application/json',},
      body:JSON.stringify({storyTitle,authorName,description,imageurl,audiourl}),
    }
    );
    const data=await response.json();
    setResponse(data);
    nav("/addash")
  }catch(error)
  {
    console.log('Error:',error);
  }
};




  return (
    <div id='updatebg'>
    <header className='upheader'>
        <img className='upword' src={Image1} alt='img'></img>
        <img className='uplogo' src={Image2} alt='img'></img>
        <img className='upsmart' src={Image3} alt='img'></img>
    </header>
    <div className='updateform'></div>
    <h1 className='formtitle'>UPDATING FORM</h1>
    <form id="updated-form">
    <label className='lubookname'>Story Title<br/>
    <input type="text" className="ubookname" value={storyTitle} onChange={(e)=>setstoryTitle(e.target.value)}/></label>
    <label className='luauthor'>Author Name<br/>
    <input type="text" className="uauthor" value={authorName} onChange={(e)=>setauthorName(e.target.value)}/></label>
    <label className='ludescription'>Description<br/>
    <input type="text" className="uvolume" value={description} onChange={(e)=>setDescription(e.target.value)}/></label>
    <label className='luimage'>Image URL<br/>
    <input type="text" className="uimage" value={imageurl} onChange={(e)=>setImageUrl(e.target.value)}/></label>
    <label className='luaudio'>Audio URL<br/>
    <input type="text" className="uaudio" value={audiourl} onChange={(e)=>setAudioUrl(e.target.value)}/></label>
    <button type='submit' className='busave' onClick={update}>Save Changes</button>
    </form>
    
    </div>
    

  )
}

export default UpdateDetails