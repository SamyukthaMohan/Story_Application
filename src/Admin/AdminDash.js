import React, { useEffect } from 'react'
import './AdminDash.css'
import Image1 from '../Image1/word.png'
import Image2 from '../Image2/bee.png'
import Image3 from '../Image3/smart.png'
import Image4 from '../Image4/growd.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import axios from 'axios'

function AdminDash() {

    const[details,allDetails]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8814/admin/geting")
      .then((response)=>{
        allDetails(response.data);
      })
    },[]);

    // const{id}=useParams();
    const nav=useNavigate();
    const deleteCard = (id) => {
      axios
        .delete(`http://localhost:8814/admin/deleting/${id}`)
        .then(() => {
          alert("Deleted!!");
          nav("/addash");
        })
        .catch((error) => {
          if (error.response) {
            console.error("Error:", error.response.data);
            // You can display an error message to the user here.
          } else {
            console.error("Network error:", error.message);
            // Handle network errors.
          }
        });
    };

//     const token=localStorage.getItem("jwtToken")
//   if(token===null){
//     nav("/")
   
//   }
//   const [user, setuser] = useState([]);
//   useEffect(() => {
//     const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
//     setuser(storeduser);
//   }, []);


  return (
    <div>
    <header>
    <nav>
    <ul>
        <div className='addul'>
        <Link to="/addash" className='btnhome'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/admin" className='btnadmin'>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/details" className='btninsert'>Insert</Link>
        </div>
        </ul>
        </nav>
        <h3 className='addwel'>Welcome</h3>
        <img className='addword' src={Image1} alt='img'></img>
        <img className='addlogo' src={Image2} alt='img'></img>
        <img className='addsmart' src={Image3} alt='img'></img>
        </header>
        <h2 className='addline'>Curates engaging and age-appropriate<br/> storytelling content for young listeners.</h2>
        <h1 className='addstart'>Let's Start</h1>
    <img className='addimge' src='https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWRtaW4lMjBvZiUyMHBvZGNhc3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60' alt='img'></img>



    <div id="showingbook">
      <div xs={1} md={3} id='card-showing'>
       {details.map((item) => (
          <span key={item.storyId}>
          <div className='card'>
          <img className="bookimage" src={item.imageurl} alt={item.description} height={230}/>
          <audio controls>
          <source src={item.audiourl}  type="audio/ogg"/>
       
          Your browser does not support the audio element.
          </audio>
          <div className='contentofbook'>
                {item.storyTitle}<br/>
                {item.description}<br/>
                {item.authorName}<br/>
          </div>
          <Link to={`/dash/${item.storyId}`}><CloudUploadIcon className='btn-upload' fontSize='large'/></Link>&nbsp;&nbsp;&nbsp;
          <DeleteSweepIcon className='btn-delete' onClick={() => deleteCard(item.storyId)} fontSize='large'/> &nbsp;&nbsp;&nbsp;
          <Link to={`/update/${item.storyId}`}><EditIcon className='btn-edit' fontSize='large'/></Link>
          </div>
          </span>
          ))}
          </div>
          </div>
    
    

    
    <footer className="addfooter">
    <div className="addfooter-content">
    <img  className="addimg8" src={Image4} alt='img'></img>
    <img  className="addimg9" src={Image4} alt='img'></img>
    <img  className="addimg10" src={Image4} alt='img'></img>
    
    <img className='adddash1' src={Image1} alt='img'></img>
    <img className='adddash2' src={Image2} alt='img'></img>
    <img className='adddash3' src={Image3} alt='img'></img>
    <div className='addicon'>
    <FacebookIcon/>
      <WhatsAppIcon/>
      <TwitterIcon/>
      <PinterestIcon/></div>
      <h6 className='addterms'>TERMS AND CONDITIONS</h6>
      <p className='addcon'> User Generated<br/>
      Submission<br/>
      Licenses <br/>
      Trademarks<br/>
      Ownership Rights<br/>
      </p>
      <h6 className='addpolicy'>PRIVACY POLICY</h6>
      <p className='addcon2'>Information we Collect<br/>
      Use of Information<br/>
      Information Sharing<br/>
      Links on Social Media<br/>
      Analytics</p>
      
      </div>
      
      <p className='addcopy'>&copy; 2023 Bee Smart.all rights reserved</p>
      
      
  </footer>
  
  </div>
  
  
  
  
  
  
  )
}

//<img className='kids' src='https://media.istockphoto.com/id/1248963146/vector/thirsty-crow.jpg?s=612x612&w=0&k=20&c=DNtPuu28A-I16KC-vTYicg-m8d7Wm7OaLCOUPcsNr4k='></img>
// <DashboardPage/>
export default AdminDash
// <div className="menudash" >
// <Menuboard/></div>