import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

// const Boxs =styled.div`
// z-index:100;
// `
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const history=useNavigate();
  React.useEffect(() => {
    if (value === 0) {
      history("/");
    } else if (value === 1) {
      history("/movies");
    } else if (value === 2) {
      history("/series");
    } else if (value === 3) {
      history("/search");
    }
  }, [value, history]);
  return (
    <Box >
      <BottomNavigation
      
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{backgroundColor:"#2d313a",position:"fixed",bottom:"0",width:"100%",zIndex:100}}
      >
        <BottomNavigationAction  style={{ color: "white" }} label="Treanding" icon={<RestoreIcon />} />
        <BottomNavigationAction  style={{ color: "white" }} label="Movies" icon={<FavoriteIcon />} />
   
        <BottomNavigationAction  style={{ color: "white" }} label="Search" icon={<LocationOnIcon />} />
     
      </BottomNavigation>
    </Box>
  );
}