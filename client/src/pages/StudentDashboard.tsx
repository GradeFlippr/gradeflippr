import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SessionTableStudent from '../components/sessionTableStudent';

export const StudentDashboard = () => {
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked Schedule New Session');
  };
  return (
    <>
      <Box m={1} display="flex" justifyContent="space-between">
        <Typography variant="h6" component="h1" align="left">
          Upcoming Sessions
        </Typography>

        <Button onClick={buttonHandler} type="submit" variant="contained" color="success">
          Schedule a new session
        </Button>
      </Box>
      <br />
      <SessionTableStudent title="Tutor Dashboard" />
    </>
  );
};
