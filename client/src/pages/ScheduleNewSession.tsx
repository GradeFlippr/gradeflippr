import React from 'react';
import Typography from '@mui/material/Typography';
import ClassSelect from '../components/ClassSelect';
import TutoringOptions from '../components/TutoringOptions';

export const ScheduleNewSession = () => {
  return (
    <>
      <ClassSelect />
      <Typography variant="h6" component="h1" align="left">
        <strong>Available Sessions</strong>
      </Typography>
      <TutoringOptions />
    </>
  );
};
