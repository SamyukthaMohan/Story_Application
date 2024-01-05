// import React, { useEffect, useState } from 'react'
// import './Dash.css'
// import Image1 from './Image1/word.png'
// import Image2 from './Image2/bee.png'
// import Image3 from './Image3/smart.png'
// import PlaylistAddCircleIcon from '@mui/icons-material/PlaylistAddCircle';
// import { Link, useParams } from 'react-router-dom'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import PinterestIcon from '@mui/icons-material/Pinterest';
// import Terms from './Terms'
// import Policy from './Policy'
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import axios from 'axios'

// function Dash() {
//   const[details,allDetails]=useState([]);
//   const{id}=useParams();


//   useEffect(() => {
//     axios.get(`http://localhost:8080/getwithid/${id}`).then((response) => {
//       console.log(response.data); 
//       allDetails(response.data);
//     });
//   }, [id]);
  
//   return (
//     <div>
//     <div className='dashheader'>
//     <Link to="/home"><h6 className='dashbutton'>Home</h6></Link>
//     <Link to="/story"><ArrowForwardIcon className='dashbutton1' fontSize='medium'/></Link>
//     <img className='dashword' src={Image1} alt='img'></img>
//         <img className='dashlogo' src={Image2} alt='img'></img>
//         <img className='dashsmart' src={Image3} alt='img'></img></div>
//         <img className='dashimg2' src='https://images.unsplash.com/photo-1629196911514-cfd8d628ba26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60' alt='img'></img>
//         <img className='dashimg1' src='https://media.istockphoto.com/id/1420807222/photo/senior-woman-podcasting-together-with-grandson-via-internet.jpg?s=612x612&w=0&k=20&c=gc4o8B9n_Nb274EFt5LLzefcGbDeCkJxNCC-iydY_cI=' alt='img'></img>
//     <h2 className='dashh2'>Let's Listening to Audio</h2>
//     <p className='dashpara'>Listen to audiobooks,<br/> podcasts,
//      Audible Originals <br/>and more.</p>


//      <div id="showingbook">
//      <div xs={1} md={3} id='card-showing'>
//       {details.map((item) => (
//          <span key={item.storyId}>
//          <div className='card'>
//          <img className="bookimage" src={item.imageurl} alt={item.description} height={230}/>
//          <audio controls>
//          <source src={item.audiourl}  type="audio/ogg"/>
      
//          Your browser does not support the audio element.
//          </audio>
//          <div className='contentofbook'>
//                {item.storyTitle}<br/>
//                {item.description}<br/>
//                {item.authorName}<br/>
//          </div>
//          <PlaylistAddCircleIcon className='user-list' fontSize='large'/>
//          </div>
//          </span>
//          ))}
//          </div>
//          </div>
          
     
//           <footer className="dashfooter">
//      <div className="dashfooter-content">
//         <img className='dash1' src={Image1} alt='img'></img>
//         <img className='dash2' src={Image2} alt='img'></img>
//         <img className='dash3' src={Image3} alt='img'></img></div>
//         <div className='dashicon'>
//         <Link to='https://www.facebook.com/' target='_blank' rel='noreferrer'><FacebookIcon/></Link>
//         <Link to='https://web.whatsapp.com/' target='_blank' rel='noreferrer'> <WhatsAppIcon/></Link>
//        <Link to='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D' target='_blank' rel='noreferrer'> <TwitterIcon/></Link>
//        <Link to='https://in.pinterest.com/login/' target='_blank' rel='noreferres'> <PinterestIcon/></Link>
//        <h6 className='dashterms'><Terms/><br/><br/></h6>
//        <p className='dashcon'> Acceptance of Terms<br/><br/>
//         User Registration<br/><br/>
//         User Conduct<br/><br/>
//         Modifications<br/><br/>
//         Limitation of Liability<br/><br/>
//         </p>
//         <h6 className='dashpolicy'><Policy/><br/><br/></h6>
//         <p className='dashcon2'>Information we Collect<br/><br/>
//         Use of Information<br/><br/>
//         Information Sharing<br/><br/>
//         Links on Social Media<br/><br/>
//         Analytics</p>
//         <h5 className='dashfaq'><Link to={"/home/#what"}>About us<br/><br/></Link>
//         <Link to={"/contact"}>Contact<br/><br/></Link>
//         <Link to={"/faq"}>FAQ</Link></h5>
//         <h6 className='dashdia'>I started this site because I love the web and the dialogue it sparks.</h6>
//         </div>
        
//         <p className='dashcopy'>&copy; 2023 Bee Smart.all rights reserved</p>
        
//         </footer>
//         </div>
        
        
//         )
//   }
//   export default Dash
  
//   //<img className='dashgroup' src={Image5} alt='img'></img>
//   //<img className='kids' src='https://media.istockphoto.com/id/1248963146/vector/thirsty-crow.jpg?s=612x612&w=0&k=20&c=DNtPuu28A-I16KC-vTYicg-m8d7Wm7OaLCOUPcsNr4k='></img>
//   //   <Link to={"/dash/${item.storyId}"}><CloudUploadIcon className='btn-upload' fontSize='large'/></Link>&nbsp;&nbsp;&nbsp;
//   //   <DeleteSweepIcon
//   //   className='btn-delete'
//   //   onClick={() => deleteCard(item.storyId)}
//   //   fontSize='large'
//   // />&nbsp;&nbsp;&nbsp;
//   //   <Link to={`/update/${item.storyId}`}><EditIcon className='btn-edit' fontSize='large'/></Link>




import React, { useEffect, useState } from 'react';
import './Dash.css';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Image1 from './Image1/word.png';
import Image2 from './Image2/bee.png';
import Image3 from './Image3/smart.png';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link, useNavigate, useParams } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Terms from './Terms';
import Policy from './Policy';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';

function Dash() {
  const nav=useNavigate();
  const [details, setDetails] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8814/admin/geting`)
      .then((response) => {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // Handle the error, e.g., show an error message or take appropriate action
      });
  }, [id]);

  
  
  const handleAddToWishlist = (item) => {
    // Check if the item is already in the wishlist
    const isAlreadyInWishlist = wishlist.some((wishlistItem) => wishlistItem.storyId === item.storyId);

    if (!isAlreadyInWishlist) {
      // If not, add it to the wishlist
      setWishlist([...wishlist, item]);
      axios.post(`http://localhost:8818/favourites/postfavdetails`, item)
        .then((response) => {
          console.log("Item added to wishlist:", response.data);
        })
        .catch((error) => {
          console.error("Error adding item to wishlist:", error);
        });
    }
  };

  const isItemInWishlist = (itemId) => {
    return wishlist.some((item) => item.storyId === itemId);
  };
  
  
  const handleAddToBookmark = (item) => {
    // Check if the item is already in the wishlist
    const isAlreadyInBookMark = bookMark.some((bookMark) => bookMark.storyId === item.storyId);

    if (!isAlreadyInBookMark) {
      // If not, add it to the wishlist
      setBookMark([...bookMark, item]);
      axios.post(`http://localhost:8812/playlist/postplaylist`, item)
        .then((response) => {
          console.log("Item added to bookmark:", response.data);
        })
        .catch((error) => {
          console.error("Error adding item to bookmark:", error);
        });
    }
  };

  const isItemInBookmark = (itemId) => {
    return bookMark.some((item) => item.storyId === itemId);
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
    <div>
      <div className="dashheader">
        <Link to="/home"><h6 className="dashbutton">Home</h6></Link>
        <Link to="/story"><ArrowForwardIcon className="dashbutton1" fontSize="medium" /></Link>
        <img className="dashword" src={Image1} alt="img" />
        <img className="dashlogo" src={Image2} alt="img" />
        <img className="dashsmart" src={Image3} alt="img" />
      </div>

      <img className="dashimg2" src="https://images.unsplash.com/photo-1629196911514-cfd8d628ba26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="img" />
      <img className="dashimg1" src="https://media.istockphoto.com/id/1420807222/photo/senior-woman-podcasting-together-with-grandson-via-internet.jpg?s=612x612&w=0&k=20&c=gc4o8B9n_Nb274EFt5LLzefcGbDeCkJxNCC-iydY_cI=" alt="img" />

      <h2 className="dashh2">Let's Listening to Audio</h2>
      <p className="dashpara">Listen to audiobooks,<br/> podcasts, Audible Originals <br/>and more.</p>

      <div id="dash-showingbook">
        <div xs={1} md={3} id="dash-card-showing">
          {details.length > 0 ? (
            details.map((item) => (
              <span key={item.storyId}>
                <div className="dash-card">
                  <img className="dash-bookimage" src={item.imageurl} alt={item.description} height={230} />
                  <audio controls>
                    <source src={item.audiourl} type="audio/ogg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div className="dash-contentofbook">
                    {item.storyTitle}<br/>
                    {item.description}<br/>
                    {item.authorName}<br/>
                  </div>
                  <FavoriteIcon                   
                onClick={() => handleAddToWishlist(item)}
                className='dashfav'
                sx={{ color: isItemInWishlist(item.storyId) ? 'red' : 'grey' }}
                fontSize='large'
                />&nbsp;
                <BookmarkIcon
                onClick={() => handleAddToBookmark(item)}
                className='dashbook'
                sx={{ color: isItemInBookmark(item.storyId) ? 'yellow' : 'grey' }}
                fontSize='large'/>



                </div>
              </span>
            ))
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </div>

      {/* Other components and HTML elements here */}
      
      <footer className="dashfooter">
        <div className="dashfooter-content">
          <img className="dash1" src={Image1} alt="img" />
          <img className="dash2" src={Image2} alt="img" />
          <img className="dash3" src={Image3} alt="img" />
        </div>
        <div className="dashicon">
          <Link to="https://www.facebook.com/" target="_blank" rel="noreferrer"><FacebookIcon /></Link>
          <Link to="https://web.whatsapp.com/" target="_blank" rel="noreferrer"> <WhatsAppIcon /></Link>
          <Link to="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank" rel="noreferrer"> <TwitterIcon /></Link>
          <Link to="https://in.pinterest.com/login/" target="_blank" rel="noreferres"> <PinterestIcon /></Link>
          <h6 className="dashterms"><Terms /><br/><br/></h6>
          <p className="dashcon">Acceptance of Terms<br/><br/>User Registration<br/><br/>User Conduct<br/><br/>Modifications<br/><br/>Limitation of Liability<br/><br/></p>
          <h6 className="dashpolicy"><Policy /><br/><br/></h6>
          <p className="dashcon2">Information we Collect<br/><br/>Use of Information<br/><br/>Information Sharing<br/><br/>Links on Social Media<br/><br/>Analytics</p>
          <h5 className="dashfaq"><Link to="/home/#what">About us<br/><br/></Link><Link to="/contact">Contact<br/><br/></Link><Link to="/faq">FAQ</Link></h5>
          <h6 className="dashdia">I started this site because I love the web and the dialogue it sparks.</h6>
        </div>
        <p className="dashcopy">&copy; 2023 Bee Smart. All rights reserved</p>
      </footer>
    </div>
  );
}

export default Dash;
