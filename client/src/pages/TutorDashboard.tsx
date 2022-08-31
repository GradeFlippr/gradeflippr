import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SessionTableTutor from '../components/sessionTableTutor';

export const TutorDashboard = () => {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked Update Availibility');
  };

  return (
    <>
      <Box m={1} display="flex" justifyContent="space-between">
        <Typography variant="h6" component="h1" align="left">
          Upcoming Sessions
        </Typography>

        <Button
          onClick={buttonHandler}
          type="submit"
          variant="contained"
          color="primary"
          sx={{ bgcolor: '#3F48CC' }}
        >
          Update Availability
        </Button>
      </Box>
      <br />
      <SessionTableTutor title="Tutor Dashboard" />
    </>
  );
};
