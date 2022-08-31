import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Login } from '@mui/icons-material';
import { useAuth } from '../hooks/useAuth';

const theme = createTheme();

export default function SignUpPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const [school, setSchool] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setSchool(event.target.value as string);
  };
  const [role, setRole] = React.useState('');
  const handleChangeRole = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };
  const { user, login } = useAuth();
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked sign up');
    //MAKE DB CALL FOR SIGN UP, THEN IF SUCCESSFUL, CALL 'login' FROM useAuth then Redirect to dashboard/student. If SignUp fails, prompt user to retry

    //TEST LOGIN CALL BELOW, REPLACE WITH CALL THAT PASSES VALID DB RESPONSE LATER
    login('userA');
    console.log(`CURR USER: ${user}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="school-select-label">School</InputLabel>
                  <Select
                    labelId="school-select-label"
                    id="school-simple-select"
                    value={school}
                    label="School"
                    onChange={handleChange}
                  >
                    <MenuItem>High School - Alhambra</MenuItem>
                    <MenuItem>High School - Bayside </MenuItem>
                    <MenuItem>High School - East Ridge</MenuItem>
                    <MenuItem>High School - Rydell </MenuItem>
                    <MenuItem>University - Harvard </MenuItem>
                    <MenuItem>University - Stanford </MenuItem>
                    <MenuItem>University - Yale </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="role-select-label">Role</InputLabel>
                  <Select
                    labelId="role-select-label"
                    id="role-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleChangeRole}
                  >
                    <MenuItem>Tutor</MenuItem>
                    <MenuItem>Student</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={buttonHandler}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink to="/login">Already have an account? Sign in</RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
