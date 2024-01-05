import React, { useEffect, useState } from 'react'
import Menuboard from './Menuboard'
import './Home.css'
import Image1 from './Image1/word.png'
import Image2 from './Image2/bee.png'
import Image3 from './Image3/smart.png'
import Image4 from './Image4/growd.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Terms from './Terms'
import  Policy from './Policy'
import { Link, useNavigate } from 'react-router-dom'
import {  useSelector } from 'react-redux'
import { selectUser } from './Redux/UserSlice'
//import Image5 from './Image5/group.png'

function Home() {
  const user = useSelector(selectUser);
  // Check if user is not null before accessing its properties
  const username = user ? user.username:"Guest";
    
//   const nav=useNavigate();
//   const token=localStorage.getItem("jwtToken")
//   if(token===null){
//     nav("/")
   
//   }
//   const [users, setuser] = useState([]);
//   useEffect(() => {
//     const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
//     setuser(storeduser);
//   }, []);
    const email=localStorage.getItem('email');
    const emailBeforeAt=email? email.split('@')[0]:'';
 
    return (
        <div className='homediv'> 
        <header>
        <div className="homedash" >
        <Menuboard/></div>
        <nav>
        <div className='homeredux'>Welcome {emailBeforeAt}</div>
        <ul>
        <div className='homeul'>
        <Link to="/home" style={{textDecoration:'none',color:'inherit'}}>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/" style={{textDecoration:'none',color:'inherit'}}>Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/register" style={{textDecoration:'none',color:'inherit'}}>Signup</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/contact" style={{textDecoration:'none',color:'inherit'}}>Contact</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="#why" style={{textDecoration:'none',color:'inherit'}}>Aboutus</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
       
        </ul>
        </nav>
        <img className='homeword' src={Image1} alt='img'></img>
        <img className='homelogo' src={Image2} alt='img'></img>
        <img className='homesmart' src={Image3} alt='img'></img>
        </header>
        <img className='homeimg2' src='https://img.freepik.com/free-vector/gray-grunge-texture-white-background_1409-2134.jpg' alt='img2'></img>
    <h1 className='homehead1'>Kids’ Story <br/>Podcasts that <br/>Will Fascinate <br/>Your Toddler or<br/> Preschooler</h1>
    <img className='homeimg1' src='https://mayasmart.com/wp-content/uploads/2022/02/Kids-Story-Podcasts-cover-scaled-1.jpg' alt='img'></img>
    <h5 className='homewhy'>Why??</h5>
    <h6 className='homemom'>“Mommy! Please tell me a story!”</h6> 
    <p className='homemom1'>How can you resist such a <br/>request? 
    You can’t! And even <br/>more – you shouldn’t!  
    Early <br/>childhood period is a time when <br/>children acquire language and by<br/> being socially active,
     they<br/> develop communication skills. <br/>
     This period is a time when <br/>children develop oral language as<br/> well as literacy skills like reading,<br/>
      writing and listening. Therefore <br/> stories play a very important role <br/>in child's development.</p>
      <img  className="homeimg3" src='https://cdn.shopify.com/s/files/1/1059/3346/files/person-reading-a-book-1741230_large.jpg?v=1585488066' alt='img'></img>
      
      <img className='homeimg4' src='https://media.gettyimages.com/id/1221468639/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=Y556Rao4a4bnaBx_EX1ZGGseGwLeIzzJJA52qj0I4dc=' alt='img'></img>
      

      <h6 className='homepara' id="why">We Strongly believe that trust is paramount in a relationship.<br/>
       We do not own or sell your data, we are here to provide you the best from us.<br/>
       The most important stage in your children's life...Let's catch us.</h6>
       <div id="aboutus">
       <h5 className='homekids'>Want From Us..</h5>
       <p className='homepara2'>Our biggest dream is to see kids all around the world with easy<br/> access to a vibrant
        library of engaging, quality free-to-read stories.<br/> If you’re a writer or illustrator who would 
        like to volunteer with our project,<br/> or you’re an organization that wants to help create new free
         stories for kids, <br/>please contact us at read@beesmart.com – we’d love to work together.</p>
         <img className='homeimg6' src='https://img.freepik.com/free-vector/white-abstract-background-design_23-2148825582.jpg?size=626&ext=jpg&uid=R117641911&ga=GA1.2.432411520.1684857937&semt=ais' alt='img'></img>
         <img className='homeimg5' src='https://media.istockphoto.com/id/1188451269/photo/little-boy-listening-music-with-headphone.jpg?s=612x612&w=0&k=20&c=AA-eiiRx8zVqMGyTTKZv1kwWFSnLpYVk4lXuSHI_eZ8=' alt='img'></img>
         </div>
         <p className='homepara3'> "Storytelling is the vivid description of ideas, beliefs, personal experiences,<br/>
          and life- lessons through stories or narratives that evoke powerful emotions and insights."</p>
          <h3 className='homehero'>Olivier Serrat"</h3>
          <img className='homeimg7' src='https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEtpZHMlMjB3aXRoJTIwYXVkaW8lMjBsaXN0ZW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60' alt='img'></img>

         <footer className="homefooter">
      <div className="homefooter-content">
      <img  className="homeimg8" src={Image4} alt='img'></img>
      <img  className="homeimg9" src={Image4} alt='img'></img>
      <img  className="homeimg10" src={Image4} alt='img'></img>
      
      <img className='hdash1' src={Image1} alt='img'></img>
      <img className='hdash2' src={Image2} alt='img'></img>
      <img className='hdash3' src={Image3} alt='img'></img>
      <div className='homeicon'>
      <Link to='https://www.facebook.com/' target='_blank' rel='noreferrer'><FacebookIcon color='black'/></Link>
       <Link to='https://web.whatsapp.com/' target='_blank' rel='noreferrer'> <WhatsAppIcon  color='black'/></Link>
       <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target='_blank' rel='noreferrer'> <TwitterIcon  color='black'/></Link>
       <Link to='https://in.pinterest.com/login/' target='_blank' rel='noreferres'> <PinterestIcon  color='black'/></Link></div>
        <h6 className='hometerms'><Terms/></h6>
        <p className='homecon'> User Generated<br/>
        Submission<br/>
        Licenses <br/>
        Trademarks<br/>
        Ownership Rights<br/>
        </p>
        <h6 className='homepolicy'><Policy/></h6>
        <p className='homecon2'>Information we Collect<br/>
        Use of Information<br/>
        Information Sharing<br/>
        Links on Social Media<br/>
        Analytics</p>
        
        </div>

       <p className='homecopy'>&copy; 2023 Bee Smart.all rights reserved</p>
       
     
    </footer>

    </div>
  )
}


export default Home
      //<img className='homeimg1' src=''></img>