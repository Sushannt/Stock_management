import { useState } from "react";
import useAuth from "../hooks/useAuth";

import {
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Divider,
  ListItemIcon,
  Tooltip,
  IconButton,
} from "@mui/material";
import { Logout } from "@mui/icons-material";

import PersonIcon from "@mui/icons-material/Person";

const ProfileMenu = () => {
  const { auth, logout } = useAuth();

  const { userName } = auth?.result;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small">
          <Avatar>M</Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
      >
        {auth ? (
          <MenuItem
            sx={{
              bgcolor: "primary.dark",
              ":hover": { bgcolor: "primary.dark" },
            }}
          >
            <Typography variant="h6" color="white">
              {userName}
            </Typography>
          </MenuItem>
        ) : null}
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          Account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default ProfileMenu;
