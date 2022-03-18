import { Grid } from "@material-ui/core";


function ProfileContentContainer(props) {



  return (
    <Grid container justifyContent="center" spacing={5}>
            {props.children}
    </Grid>
  )
}

export default ProfileContentContainer;
