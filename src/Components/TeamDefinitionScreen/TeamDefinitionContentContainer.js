import { Grid } from "@material-ui/core";

function TeamDefinitionContentContainer(props) {
  return (
    <Grid container direction='row' justifyContent="center" spacing={5}>
            {props.children}
    </Grid>
  )
}

export default TeamDefinitionContentContainer;
