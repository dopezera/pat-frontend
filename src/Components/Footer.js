import { Box } from "@mui/system";

import DHC from '../Images/dhc-vector.png'

function Footer() {
  return (
      <Box container position="static" sx={{background: '#333', color:'white'}}>
          <Box container sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <img alt='DHC Gaming' src={DHC} width='150px' height='150px'></img>
          </Box>
      </Box>       
  )
}

export default Footer;
