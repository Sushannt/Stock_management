import logo from "../image/nagar-nigam.jpg";
import ProfileMenu from "./ProfileMenu";
import { Container, Nav, Navbar, Image } from "react-bootstrap";

import {
  Badge,
  TextField,
  InputAdornment,
  FormControl,
  IconButton,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Header() {
  return (
    <Navbar className="bg-body-tertiary px-5 shadow-sm">
      <Container fluid>
        <Navbar.Brand href="#" className="me-auto">
          <Image src={logo} rounded width={50} />
        </Navbar.Brand>
        <Nav className="d-flex align-items-center text-secondary gap-2">
          <Nav.Item>
            <FormControl>
              <TextField
                label="Search"
                size="small"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Nav.Item>
          <Nav.Item>
            <IconButton>
              <Badge color="primary" variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Nav.Item>
          <Nav.Item>
            <ProfileMenu />
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
