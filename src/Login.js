import React, { useEffect, useState } from 'react';
import Image1 from './Image1/word.png';
import Image2 from './Image2/bee.png';
import Image3 from './Image3/smart.png';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import Forget from './Forget';
import axios from 'axios';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState([]);

  const fetchData = (e) => {
  e.preventDefault();
    const userDetails={
      email:email,
      password:password
    }
    console.log(userDetails)
      axios.post("http://localhost:9000/api/v1/entry/auth_user",userDetails)
    .then((response) =>   {
      const token=response.data.token;
      const email=userDetails.email;
      if(token)
      {
        localStorage.setItem("token",token);
        localStorage.setItem("email",email);

      }
     
      console.log(response)
      nav("/home")
    }
    ).catch((error)=>{
      console.log(error)
      alert("Please Register now!!")
      nav("register")
    })
  }

 


  return (
    <div>
      <div className="bg"></div>
      <header id="sammheader">
        <img className="logword" src={Image1} alt="img" />
        <img className="loglogo" src={Image2} alt="img" />
        <img className="logsmart" src={Image3} alt="img" />
      </header>
      <form>
        <div className="cover"></div>
        <h1 className="login">Log in..</h1>
        <input
          className="dappa"
          name="username"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <input
          className="pripwd"
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h3 className="priforgot">
         <Forget />
        </h3>
        <button className="prilog" onClick={fetchData}>
          Login
        </button>
        <p className="prinew">
          <b>Don't have an account yet? </b>
        </p>
        <Link to="/register">
          <p className="prisign">Sign Up!</p>
        </Link>
        <p className="pri">
          <b>Are you an admin? Go to </b>
        </p>
        <Link to="/admin">
          <p className="priadd">Admin</p>
        </Link>
      </form>
    </div>
  );
}


