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
import { Email, Login } from '@mui/icons-material';
import { useAuth } from '../hooks/useAuth';
import { gql, useQuery, useMutation } from '@apollo/client';

const theme = createTheme();
const register = gql`
  mutation registerUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $schoolId: Int!
    $username: String!
  ) {
    register(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      schoolId: $schoolId
      username: $username
    ) {
      username
    }
  }
`;
/**
 * email: String!, firstName: String!, lastName: String!, password: String!, schoolId: Int!, username: String!
 */

export default function SignUpPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [email, setEmail] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [school, setSchool] = React.useState('');
  const [role, setRole] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSchool(event.target.value as string);
  };

  const handleChangeRole = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const { user, login } = useAuth();

  const [signupMutation, { data: registeredUser, loading, error }] = useMutation(register);

  React.useEffect(() => {
    if (registeredUser) {
      login(registeredUser.username);
    }
  }, [registeredUser]);

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('clicked sign up');
    const mutationArgs = {
      email,
      firstName,
      lastName,
      password,
      username,
      schoolId: Number(school),
    };
    signupMutation({ variables: mutationArgs });
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
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
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
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
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
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
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
                    <MenuItem value="1">High School - Alhambra</MenuItem>
                    <MenuItem value="2">High School - Bayside </MenuItem>
                    <MenuItem value="3">High School - East Ridge</MenuItem>
                    <MenuItem value="4">High School - Rydell </MenuItem>
                    <MenuItem value="5">University - Harvard </MenuItem>
                    <MenuItem value="6">University - Stanford </MenuItem>
                    <MenuItem value="7">University - Yale </MenuItem>
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
                    <MenuItem value="1">Tutor</MenuItem>
                    <MenuItem value="2">Student</MenuItem>
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
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
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
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
