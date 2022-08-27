import { BasicPage } from '../components/BasicPage';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SessionTableTutor from '../components/sessionTableTutor';
import { AppBar } from '../components/AppBar';

export const TutorDashboard = () => {
  return (
    <>
      <br />
      <AppBar />
      <br />

      <Box m={1} display="flex" justifyContent="space-between">
        <Typography variant="h7" component="h1" align="left">
          Upcoming Sessions
        </Typography>

        <Button variant="contained" color="success" alignItems="flex-end">
          Update Availability
        </Button>
      </Box>
      <br />
      <SessionTableTutor title="Tutor Dashboard" icon={<StarIcon />} />
    </>
  );
};
