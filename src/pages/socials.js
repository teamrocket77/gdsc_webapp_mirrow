import { ClassNames } from "@emotion/react";
import { Box, Grid, Typography, Stack, Button } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { useSession } from 'next-auth/react';

export default function Index() {
  const theme = useTheme()
  const { data: session, status } = useSession();
  // If the client session is loading, do this.
  // Todo: Replace with a nice loading screen.
  if (status === "loading") {
    return <p>Loading Session</p>
  }

  return (
    <Box component='div' sx={{ height: '100%', overflow: 'hidden'}} mt={4}>
      <Grid container spacing={6} direction='column' alignItems='center' justifyContent='center' style={{ minHeight: '60vh' }}>
      <Grid item>
              <Stack direction='row' spacing={1} display='flex' alignItems='center' flexWrap='wrap'>
                <Typography variant='h2' component='div' color={ theme.palette.primary.alternate } sx={{ flexGrow: 1}}>
                  JOIN US ON...
                </Typography>
              </Stack>
              <Stack spacing={1} display='flex' alignItems="center" flexWrap='wrap'>
                <Button variant='outlined' color= "red" href="https://www.youtube.com/channel/UCO3Yz1Nj6qkIZkHF9RS9UvA" target="_blank">
                  YouTube
                </Button>
              </Stack>
              <Stack spacing={1} display='flex' alignItems="center" flexWrap='wrap'>
                <Button variant='outlined' color= "blue" href="https://mobile.twitter.com/gdscksu" target="_blank">
                  Twitter
                </Button>
              </Stack>
              <Stack spacing={1} display='flex' alignItems="center" flexWrap='wrap'>
                  <Button variant='outlined' color= "yellow" href='https://www.instagram.com/gdscksu/' target="_blank">Instagram</Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>


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