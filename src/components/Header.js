import React, { useState } from "react";
import {
  Stack,
  Link,
  Toolbar,
  Typography,
  Container,
  AppBar,
  Button,
  Drawer,
} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  {name: "Home", id:"home", link:"/"},
  { name: "About", id: "about", link: "/about" },
  { name: "Projects", id: "projects", link: "/projects" },
  { name: "Contact", id: "contact", link:'/contact' },
];
const NavList = ({ ...props }) => {
  return (
    <Stack
      overflow="auto"
      direction={{ xs: "column", sm: "row" }}
      gap={3}
      ml={{ xs: 3, sm: 0 }}
      mt={{ xs: 3, sm: 0 }}
      width={{ xs: "150px", sm: "initial" }}
      {...props}
    >
      {pages.map(page => (
        <RouterLink
          to={page.link}
          key={page.id}

          >

            <Link
          sx={{
            color: { xs: "primary", sm: "white" } 
            
          }}
          >
        
          {page.name}
        </Link>
        </RouterLink>
      ))}
    </Stack>
  );
};
const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = newOpen => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Button
        variant="text"
        onClick={toggleDrawer(true)}
        sx={{ color: "white", display: { xs: "flex", sm: "none" } }}
      >
        <MenuIcon />
      </Button>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{
      display: { xs: "inherit", sm: "none"  }
        }}
      >
        <NavList />
      </Drawer>
      <NavList
        sx={{
          display: { xs: "none", sm: "inherit", fontFamily:"Londrina Sketch", fontSize: "30px" },
        }}

      />
    </>
  );
};
const Header = () => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Typography variant="h3" style = {{fontFamily: "Londrina Sketch"}}> &lt;Priya/&gt; </Typography>
            <Nav />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;