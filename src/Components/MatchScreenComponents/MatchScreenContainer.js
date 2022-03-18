import { Box, Button } from '@material-ui/core'

function MatchesScreenContainer(props) {
  return (
        <>
        <h2 align='center'>Matches</h2>

        {props.children}

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: 20,
          }} 
          justifyContent='center'>
          <Button variant='contained' >Proxima partida</Button>
        </Box>

        </>
    
  )
}

export default MatchesScreenContainer;
