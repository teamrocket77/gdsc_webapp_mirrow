import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
  Tabs,
  Tab,
  Grid,
  Link,
} from "@mui/material";

import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import DrawerComp from "./DrawerComp";

// Navbar Pages
const PAGES = ["About", "Events", "Socials", "Our Team", "Opportunities"];

// This is overkill but, we want page -> href mapping w/ key-value
// Index matches pages since lists retain position (index)
const PAGES_MAPPING = ["about", "events", "socials", "team", "opportunities"];

const Navbar = (props) => {
  const { data: session, status } = useSession();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {isMatch ? (
            <>
              <Grid
                container
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={2}>
                  <DrawerComp sx={{ marginLeft: 4 }} />
                </Grid>
                <Grid item xs={8}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <a href="/">
                      <img
                        alt="Google Developer Student Club Logo"
                        src="/static/images/gdsc_logo.png"
                        height="50px"
                        width="50px"
                        marginX="auto"
                      />
                    </a>
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <div></div>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                noWrap
                component={Link}
                sx={{ flexGrow: 1, textDecoration: "none" }}
              >
                <Link
                  href="/"
                  underline="none"
                  color={theme.palette.primary.alternate}
                >
                  DSC KSU
                </Link>
              </Typography>

              <Tabs textColor={theme.palette.text.primary}>
                {PAGES.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    href={"/" + PAGES_MAPPING[index]}
                  ></Tab>
                ))}
              </Tabs>

              {/* If Session does not exist, invalid or client has not logged in, do this. */}
              {!session && (
                <>
                  <Button color="inherit" onClick={() => signIn()}>
                    Login
                  </Button>
                </>
              )}

              {/* If Session does exist and the client has logged in, do this. */}
              {session && (
                <>
                  <Button color="inherit" onClick={() => signOut()}>
                    Logout
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
