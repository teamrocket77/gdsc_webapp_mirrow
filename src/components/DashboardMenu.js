import { signOut } from "next-auth/react";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import EventNoteIcon from "@mui/icons-material/EventNote";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "@mui/icons-material/Logout";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Box,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  Divider,
  Collapse,
  useMediaQuery,
} from "@mui/material";
const drawerWidth = 240;
const DashboardMenu = () => {
  const theme = useTheme();

  const isMobile = useMediaQuery("(max-width: 600px)");
  const [isOpened, setIsOpenned] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Typography
        variant="h6"
        color={theme.palette.primary.alternate}
        sx={{
          mx: 2,
          mt: 3,
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        | Navigation Menu
      </Typography>

      <List component="nav" disablePadding>
        <ListItemButton href="/dashboard/analytics">
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItemButton>
        <ListItemButton href="/dashboard/events">
          <ListItemIcon>
            <EventNoteIcon />
          </ListItemIcon>
          <ListItemText primary="Events" />
        </ListItemButton>
        <ListItemButton href="/dashboard/applications">
          <ListItemIcon>
            <ContactPageIcon />
          </ListItemIcon>
          <ListItemText primary="Applications" />
        </ListItemButton>
        <ListItemButton onClick={() => setIsClicked(!isClicked)}>
          <ListItemIcon>
            <PeopleAltIcon />
          </ListItemIcon>
          <ListItemText primary="Current Team" />
          {isClicked ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemButton>
        <Collapse in={isClicked} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton href="/dashboard/memberlist">
              <ListItemText inset primary="Member List" />
            </ListItemButton>
            <ListItemButton href="/dashboard/permission">
              <ListItemText inset primary="Give Permission" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
      }}
    >
      {/*  top bar */}
      <AppBar
        height="64px"
        position="fixed"
        elevation={1}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            flexGrow: 1,
            display: "flex",
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={() => setIsOpenned(!isOpened)}
              sx={{ mx: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box
            component="img"
            sx={{
              height: "50px",
              width: "50px",
              mx: { sm: 2, md: 2, lg: 5 },
              display: { xs: "none", sm: "block", md: "block", lg: "block" },
            }}
            alt="DSC logo"
            src="/static/images/gdsc_logo.png"
          />

          <Typography
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              typography: { xs: "h6", sm: "h6", md: "h6", lg: "h5" },
            }}
          >
            Dashboard
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton sx={{ mx: 2 }}>
              <Badge badgeContent={1} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Typography
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            >
              First-Last
            </Typography>
            <IconButton
              size="large"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="inherit"
              sx={{ mx: 2 }}
            >
              <Avatar />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>
                <Avatar /> First-Last
              </MenuItem>
              <Divider />
              <MenuItem onClick={signOut}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* side drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          // container={container}
          variant={"temporary"}
          anchor={!isMobile ? "left" : undefined}
          open={isOpened}
          onClose={() => setIsOpenned(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        bgcolor={theme.palette.dashboardBackground.main}
        sx={{
          position: "absolute",
          right: 0,
          p: 3,
          width: { sm: `calc(100% - 240px)`, xs: "100%" },
          height: "100vh",
        }}
      >
        <Toolbar />
        {/* Render each tab component to this <Box> */}
        <p>The dashboard content goes here....</p>
      </Box>
    </Box>
  );
};

export default DashboardMenu;
