import { Box, CardContent, CardHeader, Grid, Typography } from "@material-ui/core";
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';


function Profile(props) {

    return (
        <Grid item>
            <Card sx={{ width: 345 }}>
            <CardHeader 
                avatar={
                <Avatar sx={{ height: 100, width: 100 }} aria-label="recipe" alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx3NRpWq875XdnYw285UobozdDDvWd1m91kw&usqp=CAU" />
                }
                title={<Typography>{props.user.username}</Typography>}
                subheader={<Typography>LVL: 10</Typography>}
            />
            <CardContent>
            <Grid container spacing={0}>
            <Grid item xs>
                    <Box sx={{
                        border: '1px solid #333',
                        backgroundColor: '#fff',
                    }}>
                        <Typography variant='h6' align='center'>KDR</Typography>
                        <Typography variant='h4' align='center'>{props.user.kdr}</Typography>
                    </Box>
                </Grid>
                <Grid item xs>
                    <Box sx={{
                            border: '1px solid #333',
                            backgroundColor: '#fff',
                            
                        }}>
                        <Typography variant='h6' align='center'>Vitórias</Typography>
                        <Typography variant='h4' align='center'>50%</Typography>
                    </Box>
                </Grid>
            </Grid>
            </CardContent>
            <Typography align='center'>14/03/2022</Typography>
        </Card>
        </Grid>
        
        
        


    )
  }
  
  export default Profile;
  