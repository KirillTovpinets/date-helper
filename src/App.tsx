import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Link, Outlet } from 'react-router-dom';
import { APP_ROUTES } from './constants';
import { appStyles } from './styles/app.styles';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={appStyles.app}>
        <Box sx={appStyles.aside}>
          <List>
            <ListItem>
              <ListItemButton>
                <Link style={appStyles.link} to={APP_ROUTES.difference}>
                  {APP_ROUTES.difference}
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link style={appStyles.link} to={APP_ROUTES.timeDifference}>
                  {APP_ROUTES.timeDifference}
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <Link style={appStyles.link} to={APP_ROUTES.adjustDate}>
                  {APP_ROUTES.adjustDate}
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Box sx={appStyles.content}>
          <Outlet />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

export default App;
