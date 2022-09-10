import { ClassNames } from "@emotion/react";
import * as React from 'react';
import { Box, Grid, Typography, Stack, Button, Paper, SvgIcon} from "@mui/material";

import DiscordLogo from "../public/static/images/wave_1.svg";
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

  SvgIcon.defaultProps = {
    viewBox: '0 0 24 24',
    focusable: 'false',
    'aria-hidden': 'true',
  }

  //Attempt to make Discord Icon as custom icon property.
  //However, it does not appear on Discord button.
  const DiscordIcon = (props) => {
    return (
      <SvgIcon {...props}>
            <path d = "M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"/>
      </SvgIcon>
    )

  }


  
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
                    }} startIcon = {
                      <DiscordIcon></DiscordIcon>
                    }  href='https://www.discord.gg/jQpFr6ZRXg' target="_blank">Discord</RoundedButton>
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
    
  )
}