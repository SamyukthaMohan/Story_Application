import React, { useEffect, useState } from 'react'
// import './Settings.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
//import Typography from '@mui/material/Typography';
import { selectUser } from './Redux/UserSlice';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';





const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function Settings({ username, emailid, phonenum }) {
  const [open, setOpen] = React.useState(false);
   const nav=useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  
  };
  const handlelogout= () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    nav("/");
  
  };

  // const user = useSelector(selectUser);
  const email = localStorage.getItem("email");
  const [userData, setUserData] = useState({});
  const name=localStorage.getItem("email");
  const userName=name.split('@')[0];



  const fetchUserData = async () => {
    try {
      // Replace 'YOUR_BACKEND_ENDPOINT' with the actual endpoint to fetch user data
      const response = await fetch(`http://localhost:9000/api/v1/contact/getdetailsByEmailId/${email}`);
      const data = await response.json();
      setUserData(data); // Assuming the backend returns an object with username and phoneNumber
    } catch (error) {
      console.error('Error fetching user data', error);
    }
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    fetchUserData();
  }, []);
  
  return (
    
    <div>
    <p variant="outlined" onClick={handleClickOpen}>
    Settings
  </p>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          User Profile
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <h3 className='setpro'>User Profile</h3>
        <h5>These settings apply to all Plugin Name functionality</h5>
          <p>Username: {userName}</p>
          <p>Email: {email}</p>
          <p>Phone Number: {userData.phonenum}</p>
        
        
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handlelogout}>
          Sign Out
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default Settings