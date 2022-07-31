import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from "@mui/material"
import { useSession, signIn, signOut } from 'next-auth/react';

const Navbar = (props) => {
    const { data: session, status } = useSession();

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
                    DSC KSU
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit' href="../about">About</Button>
                    <Button color='inherit' href="../events">Events</Button>
                    <Button color='inherit' href="../socials">Socials</Button>
                    <Button color='inherit' href="../our_team">Our Team</Button>

                     {/* If Session does not exist, invalid or client has not logged in, do this. */}
                    {!session && (
                        <>
                            <Button color='inherit' onClick={() => signIn()}>Login</Button>
                        </>
                    )}

                    {/* If Session does exist and the client has logged in, do this. */}
                    {session && (
                        <>
                            <Button color='inherit' onClick={() => signOut()}>Logout</Button>
                        </>
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar