import React, { useEffect, useState } from 'react';
import Image1 from './Image1/word.png'
import Image2 from './Image2/bee.png'
import Image3 from './Image3/smart.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Terms from './Terms'
import  Policy from './Policy'
import Image4 from './Image4/growd.png'
import NotInterestedOutlinedIcon from '@mui/icons-material/NotInterestedOutlined';
import './NewStories.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';






  

function NewStories() {
 


// useEffect(() => {
//   // This code will run when the component mounts
//   const token = localStorage.getItem('token');
//   if (token === null) nav('/');
  
//   // If you need to perform cleanup when the component unmounts, you can return a function from useEffect
//   return () => {
//     // Cleanup code here (if needed)
//   };
// }, [nav]);

const nav = useNavigate();
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8812/playlist/getplaylist`)
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show an error message or take appropriate action
      });
  }, [id]);

  const deleteCard = (storyId) => {
    axios
      .delete(`http://localhost:8812/playlist/deletedetails/${storyId}`)
      .then(() => {
        alert("Removed Successfully!!");
        nav("/dash");
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


//   const token=localStorage.getItem("jwtToken")
//   if(token===null){
//     nav("/")
   
//   }
//   const [user, setuser] = useState([]);
//   useEffect(() => {
//     const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
//     setuser(storeduser);
// },[]);

  return (
    <>
    <header>
      <Link to="/home"><h6 className='storybutton'>Home</h6></Link>
      <Link to="/dash"><ArrowBackIcon className='storybutton1'/></Link>

      <img className='storyword' src={Image1} alt='img'></img>
      <img className='storylogo' src={Image2} alt='img'></img>
      <img className='storysmart' src={Image3} alt='img'></img>
      </header>
    

      <h2 className='wishtitle'>BOOKMARKS</h2>
      <div id="wish-showingbook">
        <div xs={1} md={3} id="wish-card-showing">
          {details.length > 0 ? (
            details.map((item) => (
              <span key={item.id}>
                <div className="wish-card">
                  <img className="wish-bookimage" src={item.imageurl} alt={item.title} height={230} />
                  <audio controls>
                    <source src={item.audiourl} type="audio/ogg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="wish-contentofbook">
                    {item.title}<br/>
                    <div className='book-icon'><NotInterestedOutlinedIcon  onClick={() => deleteCard(item.id)}/></div>
                    {item.description}<br/>
                  </div>
                </div>
                
              </span>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>
    
   
      //</>
      );
    }
    
    export default NewStories;
    
    // <footer className="storyfooter">
    //   <div className="storyfooter-content">
    //   <img  className="storyimg8" src={Image4} alt='img'></img>
    //   <img  className="storyimg9" src={Image4} alt='img'></img>
    //   <img  className="storyimg10" src={Image4} alt='img'></img>
      
    //   <img className='storydash1' src={Image1} alt='img'></img>
    //   <img className='storydash2' src={Image2} alt='img'></img>
    //   <img className='storydash3' src={Image3} alt='img'></img>
    //   <div className='storyicon'>
    //   <a href='https://www.facebook.com/' target='_blank' rel='noreferrer'><FacebookIcon/></a>
    //    <a href='https://web.whatsapp.com/' target='_blank' rel='noreferrer'> <WhatsAppIcon/></a>
    //    <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target='_blank' rel='noreferrer'> <TwitterIcon/></a>
    //    <a href='https://in.pinterest.com/login/' target='_blank' rel='noreferres'> <PinterestIcon/></a></div>
    //     <h6 className='storyterms'><Terms/></h6>
    //     <p className='storycon'> User Generated<br/>
    //     Submission<br/>
    //     Licenses <br/>
    //     Trademarks<br/>
    //     Ownership Rights<br/>
    //     </p>
    //     <h6 className='storypolicy'><Policy/></h6>
    //     <p className='storycon2'>Information we Collect<br/>
    //     Use of Information<br/>
    //     Information Sharing<br/>
    //     Links on Social Media<br/>
    //     Analytics</p>
        
    //     </div>

    //    <p className='storycopy'>&copy; 2023 Bee Smart.all rights reserved</p>
       
     
    // </footer>
    
   