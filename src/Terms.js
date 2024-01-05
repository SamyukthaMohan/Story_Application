import React, { useEffect, useState } from 'react'
import './Terms.css'
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
import { useNavigate } from 'react-router-dom';






const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function Terms({ username, emailid, password, phoneNumber }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const user = useSelector(selectUser);
  const email = user ? user.email:"Guest";
  
  

  return (
    
    <div>
    <h6 className='terms1' variant="outlined" onClick={handleClickOpen}>
    TERMS AND CONDITION
  </h6>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        TERMS AND CONDITION
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
        <h4>1. Acceptance of Terms</h4>

        <p>By using the Kids' Story Podcast Application (the "App"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the App.</p>
        
        <h4>2. Eligibility</h4>
        
        <p>You must be at least 18 years old or have the consent of a parent or legal guardian to use the App. The App is intended for users under the age of 18, and parents or legal guardians are responsible for monitoring their children's use of the App.</p>
        
        <h4>3. User Registration</h4>
        
        <p>You may be required to create an account to access certain features of the App. When registering, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
        
        <h4>4. Content</h4>
        
        <p>The App provides access to kid-friendly audio stories. We are not responsible for the content of these stories, but we make every effort to ensure they are appropriate for children. Parents and guardians should review content to determine its suitability for their children.</p>
        
        <h4>5. Privacy</h4>
        
        <p>Your use of the App is also governed by our Privacy Policy, which can be found here. Please review this policy to understand how we collect, use, and protect your information.</p>
        
        <h4>4. User Conduct</h4>
        
        <p>You agree not to use the App for any unlawful or prohibited purpose, including but not limited to:
        
        Transmitting or sharing any content that is harmful, offensive, or inappropriate for children.
        Attempting to gain unauthorized access to other users' accounts or any part of the App.
        Engaging in any activity that disrupts or impairs the App's functionality.</p>
        <h4>7. Termination</h4>
        
        <p>We reserve the right to terminate or suspend your access to the App at any time, with or without cause and with or without notice.</p>
        
        <h4>8. Modifications</h4>
        
        <p>We may modify these Terms and Conditions at any time without notice. It is your responsibility to review these terms periodically to stay informed of any changes. Continued use of the App after modifications indicates your acceptance of the updated terms.</p>
        
        <h4>9. Disclaimer</h4>
        
        <p>The App is provided "as is," and we make no warranties or representations regarding its functionality or content. We are not responsible for any errors, inaccuracies, or omissions in the content.</p>
        
        <h4>10. Limitation of Liability</h4>
        
        <p>To the fullest extent permitted by applicable law, we shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App.</p>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
          
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  )
}

export default Terms