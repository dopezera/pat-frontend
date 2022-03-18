import { Box, Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { Badge, Typography } from "@mui/material";

const match = {
    index: 1,
    name: '02/03/2022 - Mirage',
    teamOne: {
      name: 'team el_b0de',
      rounds: 16,
      players: [
        {
          p_name: 'el_b0de',
          p_score: 50
        },
        {
          p_name: 'denn1s',
          p_score: 50
        },
        {
          p_name: 'ciobeck',
          p_score: 50
        },
        {
          p_name: 'jw',
          p_score: 50
        },
        {
          p_name: 'linconlau',
          p_score: 50
        },
        {
            p_name: 'manin',
            p_score: 50
          },
          {
            p_name: 'queda',
            p_score: 50
          },
          {
            p_name: 'rt',
            p_score: 50
          },
          {
            p_name: 'lw',
            p_score: 50
          },
          {
            p_name: 'ch',
            p_score: 50
          },
    ]
    },
  }

function CheckedInPlayersList() {
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
            <TableCell><h3>Jogador</h3></TableCell>
            <TableCell align="right"><h3>KDR</h3></TableCell>
            <TableCell align="right"><h3>VITÓRIAS</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {match.teamOne.players.map((player, index) => (
            <TableRow
              key={player.p_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              <Box container display='flex' direction='space-evenly'>
                  <Box item>
                    <Badge badgeContent={8} color="primary"></Badge>
                  </Box>
                <Box item paddingLeft={2}>
                  <Typography>{player.p_name}</Typography>
                </Box>
                 
                </Box>
              </TableCell>
              <TableCell align="right">{player.p_score}</TableCell>
              <TableCell align="right">{10}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
      </Grid>
    
  )
}

export default CheckedInPlayersList;
