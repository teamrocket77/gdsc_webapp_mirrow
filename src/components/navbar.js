import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Link,
    Box,
    useMediaQuery,
    useTheme,
    Tabs,
    Tab,
    Grid,
  } from "@mui/material";
  
  //import { Link } from "next/link";
  import Image from "next/image";
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
        <AppBar position="static" data-cy={`nav-bar-option`}>
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
                      {/* <a href="/">
                        <img
                          alt="Google Developer Student Club Logo"
                          src="/static/images/gdsc_logo.png"
                          height="50px"
                          width="50px"
                          marginX="auto"
                        />
                      </a> */}
                      <Link href="/">
                        <Image
                            alt="Google Developer Student Club Logo"
                            src="/static/images/gdsc_logo.png"
                            height="50px"
                            width="50px"
                            marginX="auto"
                          />
                      </Link>
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
  
                <Tabs textColor="primary">
                  {PAGES.map((page, index) => (
                    <Tab
                      key={index}
                      label={page}
                      href={"/" + PAGES_MAPPING[index]}
                      data-cy={`nav-bar-option-${page}`}
                    ></Tab>
                  ))}
                </Tabs>
  
                {/* If Session does not exist, invalid or client has not logged in, do this. */}
                {/* {!session && (
                  <>
                    <Button color="inherit" onClick={() => signIn()}>
                      Login
                    </Button>
                  </>
                )} */}
  
                {/* If Session does exist and the client has logged in, do this. */}
                {/* {session && (
                  <>
                    <Button color="inherit" onClick={() => signOut()}>
                      Logout
                    </Button>
                  </>
                )} */}
              </>
            )}
          </Toolbar>
        </AppBar>
      </>
    );
  };
  
  export default Navbar;
  
=======
  AppBar,
  Toolbar,
  Typography,
  Link,
  useMediaQuery,
  useTheme,
  Box,
  Grid,
  Button,
} from "@mui/material";

//import { Link } from "next/link";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useState, useEffect } from "react";
import DrawerComp from "./DrawerComp";

// Navbar Pages
const PAGES = ["About", "Socials", "Opportunities"];

// This is overkill but, we want page -> href mapping w/ key-value
// Index matches pages since lists retain position (index)
const PAGES_MAPPING = ["about", "socials", "opportunities"];

const Navbar = (props) => {
  const { data: session, status } = useSession();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      <AppBar position="static" data-cy={`nav-bar-option`}>
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
                  <Link
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    href="/"
                  >
                    <Image
                      alt="Google Developer Student Club Logo"
                      src="/static/images/gdsc_logo.png"
                      height="50px"
                      width="50px"
                      marginX="auto"
                    />
                  </Link>
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

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {PAGES.map((page, index) => (
                  <Button
                    key={page}
                    sx={{ my: 2, mx: 1, color: "inherit", display: "block" }}
                    href={"/" + PAGES_MAPPING[index]}
                    data-cy={`nav-bar-option-${page}`}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              {/* If Session does not exist, invalid or client has not logged in, do this. */}
              {/* {!session && (
                <>
                  <Button color="inherit" onClick={() => signIn()}>
                    Login
                  </Button>
                </>
              )} */}

              {/* If Session does exist and the client has logged in, do this. */}
              {/* {session && (
                <>
                  <Button color="inherit" onClick={() => signOut()}>
                    Logout
                  </Button>
                </>
              )} */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
