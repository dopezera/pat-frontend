import { Box, Grid, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { Badge, Typography } from '@mui/material';

function MatchTeam(props) {
  return (
    <Grid item>
        <Box sx={{
            minWidth: 300,
            minHeight: 300,
            border: '1px solid #E0E2E4',
            borderRadius: '10px',
            backgroundColor: '#fff',
            '&:hover': {
            backgroundColor: '#333',
            opacity: [0.9, 0.8, 0.7],
            },
        }}>
            <h2 align='center'>{props.teamScore}</h2>
         
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><h3>{props.team[0].username}</h3></TableCell>
            <TableCell align="right"><h4>Kills</h4></TableCell>
            <TableCell align="right"><h4>Assists</h4></TableCell>
            <TableCell align="right"><h4>Deaths</h4></TableCell>
            <TableCell align="right"><h4>Score</h4></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.team.map((player) => (
            <TableRow
              key={player.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box container display='flex' direction='space-evenly'>
                  <Box item>
                    <Badge badgeContent={8} color="primary"></Badge>
                  </Box>
                <Box item paddingLeft={2}>
                  <Typography>{player.username}</Typography>
                </Box>
                 
                </Box>
              
              </TableCell>
              <TableCell align="right">{player.score}</TableCell>
              <TableCell align="right">{10}</TableCell>
              <TableCell align="right">{20}</TableCell>
              <TableCell align="right">{30}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </Box>
    </Grid>
  )
}

export default MatchTeam;