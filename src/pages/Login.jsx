import { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper, InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import data from '../data/loginCreds.json';

// eslint-disable-next-line react/prop-types
const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLoginInner = e => {
    e.preventDefault();
    const user = data.users.find(user => user.username === username && user.password === password);
    if (user) {
      navigate('/');
      handleLogin(username, password);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
        <Typography variant='h5' align='center' fontWeight={600} gutterBottom>
          Login to the finance web app
        </Typography>
        <form onSubmit={handleLoginInner}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type={showPassword ? 'text' : 'password'}
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Typography onClick={() => setShowPassword(!showPassword)} sx={{ cursor: 'pointer' }}>
                    {showPassword ? 'Hide' : 'Show'}
                  </Typography>
                </InputAdornment>
              )
            }}
          />
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Button type='submit' variant='contained' color='primary'>
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
