import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";

function PlayersRankBox(props) {
  return (
      <Grid item>
        <Box sx={{
            minWidth: 350,
            border: '1px solid #E0E2E4',
            borderRadius: '10px',
            backgroundColor: '#fff',
        }}>
        <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><h3>Rank</h3></TableCell>
            <TableCell><h3>Jogador</h3></TableCell>
            <TableCell align="right"><h3>KDR</h3></TableCell>
            <TableCell align="right"><h3>VITÓRIAS</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.players.map((player, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index+1}
              </TableCell>
              <TableCell component="th" scope="row">
                {player.username}
              </TableCell>
              <TableCell align="right">{player.kdr}</TableCell>
              <TableCell align="right">{player.winPercentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
      </Grid>
    
  )
}

export default PlayersRankBox;
