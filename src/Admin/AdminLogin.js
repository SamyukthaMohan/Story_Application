import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AdminLogin.css'
import { useDispatch } from "react-redux";
import { login } from '../Redux/UserSlice';
// import {Image} from './Images/adminbg.jpg';
import  Forget from '../Forget'
import Image1 from '../Image1/word.png'
import Image2 from '../Image2/bee.png'
import Image3 from '../Image3/smart.png'


export default function AdminLogin() {
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };
  const [formdata, setFormdata] = useState({
    email: "",
    password:"",
});

const dispatch = useDispatch();
    const navigate=useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      if(formdata.email.length===0){
        alert("Enter Email!")
      }
      else if(formdata.password.length===0){
        alert("Enter Password!")
      }
   else{      navigate("/addash");
   }
      dispatch(
        login({
          email: formdata.email,
        })
);
};
  return (
    <div>
    <div className='adminbg'>
    </div>
    
    <div className="admincover"></div>
    <form>
    <h1 className='adminlogin'>Admin Login</h1>
    <header className='vimluheader'>
        <img className='adminword' src={Image1} alt='img'></img>
        <img className='adminlogo' src={Image2} alt='img'></img>
        <img className='adminsmart' src={Image3} alt='img'></img>
    </header>
    <input className='adminemail' name='email' type="text" placeholder='Email' required value={formdata.email}
    onChange={handleChange}/>
<br></br>
<br></br>
<input className='adminpass' name='password' type="password" placeholder='Password' required value={formdata.password}
onChange={handleChange} />
<h3  className='adminpriforgot'><Forget/></h3>
<Link to={"/addash"}><button  className='adminprilog' onClick={handleSubmit}>Admin Login</button></Link>


<Link to={"/"}><p  className='adminpre'>Previous</p></Link>







</form>
</div>
)
//<img className='prilogin' src='https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small_2x/profile-icon-login-head-icon-vector.jpg' alt='login'></img>
//<img id = "img1" src='https://media.istockphoto.com/id/1271954585/photo/the-best-songs-keep-you-smiling.jpg?s=612x612&w=0&k=20&c=DEhyrl7GhUJfwQJt7cUyviY7VJSCbEGrmZicbcos8UM=' alt='img'></img>
//<img className='adimg1' src="./Images/adminbg.jpg" alt='background'></img>
}