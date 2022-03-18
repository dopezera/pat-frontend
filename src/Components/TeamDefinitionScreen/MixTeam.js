import { Avatar, Badge, Box, Grid } from "@mui/material";

const players = [
  {
    id: 1,
    name: 'Josebias',
    badge: '9',
  },
  {
    id: 2,
    name: 'Xablau',
    badge: '9',
  },
  {
    id: 3,
    name: 'Biu',
    badge: '9',
  },
  {
    id: 4,
    name: 'Josivaldo',
    badge: '9',
  },
  {
    id: 5,
    name: 'Bob Stewart',
    badge: '9',
  },
]

function MixTeam() {

    return (
      <Grid item>
          <Box container sx={{
            minWidth: 175,
            border: '1px solid #333',
            borderRadius: '1px',
            backgroundColor: '#fff',
        }}>
            <h1 align='center'>Time el_b0de</h1>
        
        <Grid container direction='row'>
          {
            players.map( (player) => {
              return <>
                <Grid item padding={2}>
                  <Grid container direction='column'>
                    <Grid item display='flex' justifyContent='center'>
                    <Badge badgeContent={4} color="primary"><Avatar alt="Travis Howard" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffiverr-res.cloudinary.com%2Fimages%2Ft_main1%2Cq_auto%2Cf_auto%2Cq_auto%2Cf_auto%2Fgigs2%2F131460353%2Foriginal%2Ff024197fe2791e33340746aef8607ec117748759%2Fdo-a-gaming-avatar.png&f=1&nofb=1" /></Badge>
                    </Grid>
                    <Grid item display='flex' justifyContent='center'>
                      <Box>
                        <h3>{player.name}</h3>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </>
            })
          }

        </Grid>
      </Box>
      </Grid>
      
    )
  }
  
  export default MixTeam;
  