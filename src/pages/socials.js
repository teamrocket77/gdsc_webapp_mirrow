import { Box, Button, Grid, Typography } from '@mui/material';

export default function Socials() {
    return (
        <div style={{padding: '0 38rem'}}>
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid container spacing={2} direction='column' align='center'>
                    <Grid item xs={8}>
                        <Typography align='center' component='h1' variant='h4' style={{ marginBottom: 10 }}>Socials</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Button fullWidth variant='contained' href=''>Google Developers</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Button fullWidth variant='outlined' href='https://discord.gg/jQpFr6ZRXg'>Discord</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Button fullWidth variant='outlined' href='https://www.instagram.com/gdscksu'>Instagram</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Button fullWidth variant='outlined' href='https://www.instagram.com/gdscksu'>Twitter</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Button fullWidth variant='outlined' href='https://www.youtube.com/channel/UCO3Yz1Nj6qkIZkHF9RS9UvA'>Youtube</Button>
                    </Grid>
                    <Grid item xs={8}>
                        <Button fullWidth variant='outlined' href='https://www.linkedin.com/groups/12557765'>LinkedIn</Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}