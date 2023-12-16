import React, { useState } from "react";
import {
  Menu,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const pages = ["Home", "Cart", "ABoutUs", "ContactUs", "Login", "SignUp"];
const MenuBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <React.Fragment>
      <Menu
        anchor="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Menu>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <MenuIcon color="black" />
      </IconButton>
    </React.Fragment>
  );
};

export default MenuBar;
