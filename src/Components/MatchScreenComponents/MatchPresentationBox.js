import { Box, Grid } from '@material-ui/core'


function MatchPresentationBox(props) {
  return (   
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            }} 
            justifyContent='center'>

            <h2 align='center'>{props.match.map_name}</h2>

            <Grid container direction='row' spacing={2} sx={{
                flexDirection: 'row',
                }} justifyContent='center'> 

                {props.children}
                
            </Grid> 
        </Box>
  )
}

export default MatchPresentationBox;
