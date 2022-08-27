import { BasicPage } from '../components/BasicPage';
import SchoolIcon from '@mui/icons-material/School';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SessionTableStudent from '../components/sessionTableStudent';
import { AppBar } from '../components/AppBar';

export const StudentDashboard = () => {
  return (
    <>
      <Box m={1} display="flex" justifyContent="space-between">
        <Typography variant="h7" component="h1" align="left">
          Upcoming Sessions
        </Typography>

        <Button variant="contained" color="success" alignItems="flex-end">
          Schedule a new session
        </Button>
      </Box>
      <br />
      <SessionTableStudent title="Tutor Dashboard" />
    </>
  );
};
