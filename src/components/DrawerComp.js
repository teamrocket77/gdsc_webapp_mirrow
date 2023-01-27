import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
  const PAGES = ["About", "Socials", "Opportunities", "Login"];
  const PAGES_MAPPING = ["about", "socials", "opportunities", "login"];
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{ sx: { width: 240 } }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton
              onClick={() => setOpenDrawer(false)}
              key={index}
              href={"/" + PAGES_MAPPING[index]}
            >
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        {" "}
        <MenuIcon />
      </IconButton>
    </>
  );
};

// {PAGES.map((page, index) => (
//   <Tab
//     key={index}
//     label={page}
//     href={"/" + PAGES_MAPPING[index]}
//   ></Tab>
// ))}

export default DrawerComp;
