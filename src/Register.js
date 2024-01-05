import React, { useEffect } from 'react'
import './Register.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Image1 from './Image1/word.png'
import Image2 from './Image2/bee.png'
import Image3 from './Image3/smart.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");

  const senddb=(e)=>{
    e.preventDefault()
    const details={email,username,phonenum:phonenumber,password}
    if(email.length==0||username.length==0||password.length==0||phonenumber.length==0){
      alert("Enter All fields")
    }
    else{
    axios.post("http://localhost:9000/api/v1/entry/post",details
    ).then(()=>{
      alert("user added")
      nav("/")
    })
  }
}


 
  return (
    <div>
    <text-fieldset required>
    <div id='Allign'>
    <header id='sammheader'>
        <img className='regword' src={Image1} alt='img'></img>
        <img className='reglogo' src={Image2} alt='img'></img>
        <img className='regsmart' src={Image3} alt='img'></img>
    </header>
    <form>
    <div className="regcover"></div>
    <h1 className='register'>Sign up</h1>

    <div>
  
  <input className='firstName1' value={username} required type="text"  placeholder='Username' onChange={(e) =>setUsername(e.target.value)}/>
  </div>
  <div>
  
  <input className='Email1' value={email}  required type="text" placeholder='Email' onChange={(e) =>setEmail(e.target.value)}/>
  </div>
  <div>
  
  <input className='ph1' value={phonenumber}  required type="text" placeholder='Phone Number' onChange={(e) =>setPhonenumber(e.target.value)}/>
  </div>
  <div>
  
  <input className='pwd1' value={password} required type="password" placeholder='Password' onChange={(e) =>setPassword(e.target.value)}/>
  </div>
  <button  className='signup' type="submit" onClick={senddb}>Sign Up</button>

  <p className='regnew' ><b>Already have an account? </b></p>
<Link to='/'> <p  className='regsign'>Sign In</p> </Link>


<p className='samreg' ><b>Are you an admin? Go to </b></p>
<Link to={"/admin"}><p  className='regadd'>Admin</p></Link>
  </form>
  </div>
  </text-fieldset>
  
  
    </div>
  )
}
  // <div>
  // <label  className='lastName' for="myInput"><h3>Last Name  :</h3></label>
  // <input className='lastName1'value={lastname}  required type="text" onChange={(e) =>setlastname(e.target.value)}/>
  // </div>
  // <div>
  // <label  className='cp' for="myInput"><h3>Confirm Password:</h3></label>
  // <input className='cp1'  value={confirmpassword} required type="password" onChange={(e) =>setconfirmpassword(e.target.value)}/>
  // </div>
  //<img className='signpic'  src='https://media.istockphoto.com/id/1477512312/photo/happy-kid-and-headphones-for-music-radio-and-fun-podcast-on-isolated-red-background-and.jpg?s=612x612&w=0&k=20&c=ODz-VlQIZiR3wsLjbEtQbTtTDPZlJLAMfJOl_wPvFOI=' alt='sign'