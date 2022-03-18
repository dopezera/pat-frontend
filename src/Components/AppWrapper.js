
import { Box } from '@mui/material';

function AppWrapper(props) {
  return (
    <>
    <Box container sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          boxShadow: 1,
          p: '5%',
          minWidth: 350,
        }}>
            {props.children}
        </Box>
    </>
      
      
        
  )
}

export default AppWrapper;
