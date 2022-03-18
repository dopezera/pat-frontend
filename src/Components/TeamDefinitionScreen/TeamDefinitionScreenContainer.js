import { Box } from "@mui/system";

function TeamDefinitionScreenContainer(props) {

    return (
        <>
        <h2 align='center'>MIX DE HOJE</h2>
  
        {props.children}
  
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: 0,
          }} 
          justifyContent='center'>
              <h2>End of Screen</h2>
        </Box>
      </>
    )
  }
  
  export default TeamDefinitionScreenContainer;
  