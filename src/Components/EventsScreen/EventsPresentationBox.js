import { Box, Grid } from "@material-ui/core";

function EventsPresentationBox(props) {
  return (   
    <Grid container direction='row' spacing={2} sx={{
        flexDirection: 'row',
        }} justifyContent='center'> 

        {props.children}
        
    </Grid> 
  )
}
  
  export default EventsPresentationBox;