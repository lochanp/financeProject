import { AppBar, Button, Toolbar, Typography } from '@mui/material';

// eslint-disable-next-line react/prop-types
const Header = ({ onLogout }) => {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant='h6'>Welcome {localStorage.getItem('userName')}, Calculate your Finance</Typography>
        <Button onClick={() => onLogout()} color='inherit'>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
