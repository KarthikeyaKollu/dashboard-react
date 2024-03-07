import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { green } from '@mui/material/colors';

export function Notification({type}) {
  const [state, setState] = React.useState({
    open: false,
    vertical: 'bottom', horizontal: 'right' 
  });
  const { vertical, horizontal, open } = state;
  React.useEffect(()=>{setState({...state,open:true});},[type]);



  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box sx={{ width: 500 }}>
        
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
       
        key={vertical + horizontal}
        sx={{backgroundColor:"green",borderRadius:"5px"}}
      >
        <div className='w-56'> <Alert variant="filled" severity={type}>
        Saved
      </Alert></div>

      </Snackbar>
      
    </Box>
  );
}
