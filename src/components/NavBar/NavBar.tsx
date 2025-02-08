import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Box sx={{mb: 5}}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            color='inherit'
            component={NavLink}
            to='/'
            sx={{ flexGrow: 1, textDecoration: 'none' }}
          >
            Quotes Central
          </Typography>

          <Button color='inherit' component={NavLink} to='/'>Quotes</Button>
          <Button color='inherit' component={NavLink} to='/quotes/add-quote'>Submit new quote</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;