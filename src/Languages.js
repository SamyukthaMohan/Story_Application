import React from 'react'
import './Languages.css'
import GridViewIcon from '@mui/icons-material/GridView';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';

function Languages() {
  return (
    <div>
    <div className='body'>
    <div className='lagnavigation'>
   
    <h2 className='lagdb'><GridViewIcon className='lagdbicon'/>Dashboard</h2>
    <h1 className='main2lag'><LanguageIcon className='lag1con'/>Languages</h1>
    <h1 className='lagfed'><FeedbackIcon className='lagfedcon'/>FeedBack</h1>
    <h1 className='lagset'><SettingsIcon className='lagsetcon'/>Settings</h1>
    <Link to="/"> <h1 className='laglog'><LogoutIcon className='laglogicon'/>Logout</h1></Link>
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="#">Home</a></li>
        <li className="nav-item"><a href="#">Language</a></li>
        <li className="nav-item"><a href="#">Reports</a></li>
        <li className="nav-item"><a href="#">Analytics</a></li>
        <li className="nav-item"><a href="#">Search</a></li>
      </ul>
    </nav>

    <NotificationsNoneOutlinedIcon className='langnoti'/>
     <AccountCircleOutlinedIcon className='langperson'/>
     <img  className="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOIx7iRVPIPU-CpMwwyCCduYrttV9djkAAA&usqp=CAU'></img>
    </div>
    </div>

    </div>
  )
}

export default Languages