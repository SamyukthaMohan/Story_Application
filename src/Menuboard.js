// import React from 'react'
// import './Menuboard.css'
// import Box from '@mui/material/Box';
// import SwipeableDrawer from '@mui/material/SwipeableDrawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
// import { Link } from 'react-router-dom';
// import Settings from './Settings';



// function Menuboard() {

//     const [state, setState] = React.useState({
//         top: false,
//         left: false,
//         bottom: false,
//         right: false,
//       });
    
//       const toggleDrawer = (anchor, open) => (event) => {
//         if (
//           event &&
//           event.type === 'keydown' &&
//           (event.key === 'Tab' || event.key === 'Shift')
//         ) {
//           return;
//         }
    
//         setState({ ...state, [anchor]: open });
//       };
    
//       const list = (anchor) => (
//         <Box className="mommy"
//           sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//           role="presentation"
//           onClick={toggleDrawer(anchor, false)}
//           onKeyDown={toggleDrawer(anchor, false)}
//         >
//           <List>
//             {['DashBoard', 'New Audio', 'Send Request', 'L'].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//           <List>
//             {['About us', 'Contact us', 'Settings'].map((text, index) => (
//               <ListItem key={text} disablePadding>
//                 <ListItemButton>
//                   <ListItemIcon>
//                     {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                   </ListItemIcon>
//                   <ListItemText primary={text} />
//                 </ListItemButton>
                
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       );

//   return (
//     <div>
//     <div>
//       {['centre'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>
//           <WidgetsRoundedIcon className='wid'/>
//           </Button>
//           <SwipeableDrawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//             onOpen={toggleDrawer(anchor, true)}
//           >
//             {list(anchor)}
//           </SwipeableDrawer>
//         </React.Fragment>
//       ))}
//     </div>
//     </div>
//   )
// }

// export default Menuboard



import React, { useState } from 'react';
import './Menuboard.css';
//import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import Settings from './Settings'; // Import your Settings component here
import { Link } from 'react-router-dom';
import Wishlist from './Wishlist';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Menuboard() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
    showSettings: false, // Add a state for showing Settings component
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open, showSettings: false }); // Close the Settings component when the drawer is closed
  };

  const toggleSettings = () => {
    setState({ ...state, showSettings: !state.showSettings }); // Toggle the Settings component
  };

  return (
    <div>
      <div>
        {['right'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <WidgetsRoundedIcon className='wid' />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              <List className='mommy'>
              <ListItem key="DashBoard" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <Link to="/dash" style={{textDecoration:'none',color:'inherit'}}> {/* Link to Dashboard page */}
                  <ListItemText primary="Dashboard" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem key="Bookmarked" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BookmarkIcon />
                </ListItemIcon>
                <Link to="/story" style={{textDecoration:'none',color:'inherit'}}> {/* Link to New Audio page */}
                  <ListItemText primary="Bookmarked" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem key="Send Request" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <Link to="/contact" style={{textDecoration:'none',color:'inherit'}}> {/* Link to Send Request page */}
                  <ListItemText primary="Send Request" />
                </Link>
              </ListItemButton>
            </ListItem>
            
            <ListItem key="Favurites" disablePadding>
            
              <ListItemButton>
                <ListItemIcon>
                  <FavoriteBorderIcon />
                </ListItemIcon>
                 {/* Link to Favourites page */}
                <Link to="/wish" style={{textDecoration:'none',color:'inherit'}}>
                  <ListItemText primary="Favorites" /></Link>
              </ListItemButton>
            </ListItem>
            

            <ListItem key="Settings" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SettingsApplicationsIcon />
              </ListItemIcon>
              <Settings/> {/* Link to Favourites page */}
                <ListItemText primary="" />
              
            </ListItemButton>
          </ListItem>
              </List>
              <Divider />
              
              {/* Conditionally render the Settings component */}
              {state.showSettings && (
                <div>
                
                  <Settings/>
                </div>
              )}
            </SwipeableDrawer>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Menuboard;
