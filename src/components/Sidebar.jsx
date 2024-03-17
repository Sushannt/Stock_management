import { MenuList, MenuItem, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import AccordionComponent from "./Accordion";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import AnalyticsIcon from "@mui/icons-material/Analytics";

const Sidebar = () => {
  return (
    <Box
      className="shadow-sm h-100"
      sx={{ bgcolor: "primary.dark", color: "white" }}
    >
      <MenuList className="d-flex align-items-center ml-2">
        <AnalyticsIcon
          className="my-auto ml-2"
          fontSize="small"
          color="white"
        />
        <NavLink to="/dashboard" className={"text-white text-decoration-none "}>
          <MenuItem>
            <Typography>Dashboard</Typography>
          </MenuItem>
        </NavLink>
      </MenuList>
      <AccordionComponent
        title={"Masters"}
        icon={
          <AccountCircleIcon
            className="my-auto mr-3"
            fontSize="small"
            color="white"
          />
        }
      >
        <MenuList sx={{ margin: "0 auto" }}>
          <NavLink to="/role" className={"text-white text-decoration-none "}>
            <MenuItem>
              <Typography sx={{ textTransform: "uppercase" }}> Role</Typography>
            </MenuItem>
          </NavLink>
          <NavLink
            to="/department"
            className={"text-white text-decoration-none "}
          >
            <MenuItem>
              <Typography sx={{ textTransform: "uppercase" }}>
                Department
              </Typography>
            </MenuItem>
          </NavLink>
        </MenuList>
      </AccordionComponent>
      <AccordionComponent
        title={"Manage Stock"}
        icon={
          <Inventory2Icon
            className="my-auto mr-3"
            fontSize="small"
            color="white"
          />
        }
      >
        <MenuList sx={{ margin: "0 auto" }}>
          <MenuItem>Add/Remove</MenuItem>
          <MenuItem>Issue</MenuItem>
          <MenuItem>Receive</MenuItem>
          <MenuItem>Return</MenuItem>
        </MenuList>
      </AccordionComponent>
    </Box>
  );
};

export default Sidebar;
