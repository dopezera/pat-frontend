import { Box, Button } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function ProfileScreenContainer(props) {
    return (
        <>
          <h2 align='center'>Profile</h2>

          {props.children}

            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              }} 
              justifyContent='center'>
              <Button><ArrowBackIcon/></Button>
              <Button><ArrowForwardIcon/></Button>
            </Box>  
        </>
      )
  }
  
  export default ProfileScreenContainer;
  