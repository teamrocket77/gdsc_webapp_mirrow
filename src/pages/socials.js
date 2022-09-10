import { ClassNames } from "@emotion/react";
import { Box, Grid, Typography, Stack, Button, Paper} from "@mui/material";
import YoutubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme, styled } from "@mui/material/styles";
import { useSession } from 'next-auth/react';
import { blue } from "@mui/material/colors";

export default function Index() {
  const theme = useTheme()
  const { data: session, status } = useSession();

  const RoundedButton = styled(Button)(({ theme }) => ({
    borderRadius: 30,
  }))


  
  //This block is a stylesheet for the background shapes.
  // TODO: Please put this block into a separate file.
  const styles = {
    paperContainer: {
      height:'100%',
      width: '100%',
      backgroundSize: 'cover',
      backgroundImage: "url('/static/images/background_shapes.svg')",
      overflow: 'hidden',
    }
  }
  

  // If the client session is loading, do this.
  // Todo: Replace with a nice loading screen.
  if (status === "loading") {
    return <p>Loading Session</p>
  }

  // TODO: INSERT LINK TO LINKEDIN
  
  return (
    <Paper style={styles.paperContainer}>
      <Box component='div' sx={{ height: '100%', overflow: 'hidden'}} mt={10}>
        <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center' style={{ minHeight: '86vh' }}>
        <Grid item>
                <Stack direction='row' spacing={25} display='flex' alignItems='center' flexWrap='wrap'>
                  <Typography variant='h2' component='div' color={ theme.palette.primary.alternate } sx={{ flexGrow: 1}}>
                    JOIN US ON...
                  </Typography>
                </Stack>
                <Stack spacing={5} display='flex' alignItems="center" flexWrap='wrap'>
                  <RoundedButton variant='outlined' sx={
                      {
                        color: "#FF0000", backgroundColor: "#FFFFFFF", borderColor: "#FF0000", "&: hover": 
                        {
                          color: "#FFFFFF", backgroundColor: '#FF0000', borderColor:'#FF0000'
                        }
                      }
                    } startIcon={
                        <YoutubeIcon></YoutubeIcon>
                        } href="https://www.youtube.com/channel/UCO3Yz1Nj6qkIZkHF9RS9UvA" target="_blank">
                      YouTube
                  </RoundedButton>
                </Stack>
                <Stack spacing={5} display='flex' alignItems="center" flexWrap='wrap'>
                  <RoundedButton variant='outlined' sx={{
                    color: blue[400], backgroundColor: "#FFFFFF", borderColor: blue[400], "&: hover": {
                        color: "#FFFFFF", backgroundColor: blue[400], borderColor: "#FFFFFF"
                      }
                    }} startIcon = {
                      <TwitterIcon></TwitterIcon>
                    }
                  href="https://mobile.twitter.com/gdscksu" target="_blank">
                    Twitter
                  </RoundedButton>
                </Stack>
              <Stack spacing={5} display='flex' alignItems='center' flexWrap='wrap'>
                <RoundedButton variant='outlined' sx={{
                    color: blue[200], backgroundColor: "#FFFFFF", borderColor: blue[200], "&: hover": {
                      color: "#FFFFFF", backgroundColor: blue[200], borderColor: "#FFFFFF"
                    }
                  }}
                startIcon={
                    <LinkedInIcon></LinkedInIcon>
                } href="https://www.linkedin.com/groups/12557765/" target="_blank">
                  LinkedIn
                </RoundedButton>
                </Stack>
                <Stack spacing={5} display='flex' alignItems="center" flexWrap='wrap'>
                    <RoundedButton variant='outlined' sx={{
                      color: "#FFBC00", backgroundColor: "#FFFFFF", borderColor: "#FFBC00", "&: hover": {
                        color: "#FFFFFF", backgroundColor: "#FFBC00", borderColor: "#FFFFFF"
                      }
                    }} startIcon = {
                      <InstagramIcon></InstagramIcon>
                    } href='https://www.instagram.com/gdscksu/' target="_blank">Instagram</RoundedButton>
                </Stack>
                <Stack spacing={5} display='flex' alignItems="center" flexWrap='wrap'>
                    <RoundedButton variant='outlined' sx={{
                      color: "#0d47a1", backgroundColor: "#FFFFFF", borderColor: "#0d47a1", "&: hover": {
                        color: "#FFFFFF", backgroundColor: "#0d47a1", borderColor: "FFFFFF"
                      }
                    }}  href='https://www.discord.gg/jQpFr6ZRXg' target="_blank">Discord</RoundedButton>
                </Stack>
                <Stack spacing={5} display='flex' alignItems="center" flexWrap="wrap">
                  <RoundedButton variant='outlined' sx={{
                    color: "#D32F2F", backgroundColor: "#FFFFFF", borderColor: "#D32F2F", "&: hover": {
                      color: "#FFFFFF", backgroundColor: "#D32F2F", borderColor: "#FFFFFF"
                    }
                  }} href="https://www.tiktok.com/@gdscksu_" target="_blank">TikTok</RoundedButton>
                </Stack>
              </Grid>
            </Grid>
            
          </Box>
    </Paper>

    /*
    <Box component='div' sx={{ height: '100%', overflow: 'hidden' }} mt={4}>
      <Grid container spacing={6} direction='column' alignItems='center' justifyContent='center' style={{ minHeight: '60vh' }}>
        <Grid item>
          <Stack direction='row' spacing={1} display='flex' alignItems='center' flexWrap='wrap'>
            <Typography variant='h2' component='div' color={ theme.palette.primary.alternate } sx={{ flexGrow: 1}}>
              Google Developer Student Club
            </Typography>
          </Stack>
          <Typography variant='h3' component='div' color={ theme.palette.primary.alternate } sx={{ flexGrow: 1}} mt={1} ml={9.5}>
            Kennesaw State University
          </Typography>
          <Stack direction='row' spacing={-20} display='flex' alignItems='center' flexWrap='wrap' mt={5} ml={21}>
            <Typography variant='body1' component='div' color={ theme.palette.hashtags.main } sx={{ flexGrow: 1}}>
              #developerstudentclubs
            </Typography>
            <Typography variant='body1' component='div' color={ theme.palette.hashtags.main } sx={{ flexGrow: 1}}>
              #googlestudents
            </Typography>
            <Typography variant='body1' component='div' color={ theme.palette.hashtags.main } sx={{ flexGrow: 1}}>
              #growwithgoogle
            </Typography>
          </Stack>
        </Grid>
        <Grid item>
          <Button variant='contained' color='secondary'>Get Started</Button>
        </Grid>
      </Grid>
      <Grid container spacing={0} direction='column' alignItems='center' justifyContent='center' sx={{ ml: -70, mt: -0.7 }}>
        <Grid item sx={{ mt: 10, zIndex: 3 }}>
          <Box component='img' sx={{ height: 250.61, width: 2671.24 }} alt='' src='/static/images/wave_1.svg'/>
        </Grid>
        <Grid item sx={{ mt: -37, zIndex: 2 }}>
          <Box component='img' sx={{ height: 250.61, width: 2671.24 }} alt='' src='/static/images/wave_2.svg'/>
        </Grid>
        <Grid item sx={{ mt: -37, zIndex: 1 }}>
          <Box component='img' sx={{ height: 250.61, width: 2671.24 }} alt='' src='/static/images/wave_3.svg' />
        </Grid>
      </Grid>
    </Box>
*/
    
  )
}