import { Grid } from "@mui/material";

function TeamsContainer(props) {

  return (
    <Grid item >
      <Grid container flex-wrap='wrap' justifyContent='space-evenly' spacing={2}>
        {props.children}
      </Grid>
    </Grid>
  )
}

export default TeamsContainer;
