import { AppBar, Toolbar, CssBaseline, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
// TODO: add app bar here from MUI

const styles = {
  navlinks: {
    marginLeft: '1rem',
    display: 'flex'
  },
  toolbar: {
    backgroundColor: '#2E2E2E'
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: '1rem',
    '&:hover': {
      backgroundColor: 'yellow'
    }
  }
};

function Navigation() {
  // TODO: Add conditional for admin / normal user to display 'admin' functions
  // TODO: Add other userGroup : nonAdmin
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar style={styles.toolbar}>
        <Typography variant="h4">Game Tracker</Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          <Link style={styles.link} to="/">
            Home
          </Link>
          <Link style={styles.link} to="/admin">
            Admin
          </Link>
          <Link style={styles.link} to="/example">
            Example
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Navigation;
