import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedIn');
    if (loggedInStatus === 'true') {
      setisLoggedIn(true);
    }
  }, []);

  const handleLogin = credentials => {
    localStorage.setItem('userName', credentials);
    localStorage.setItem('loggedIn', 'true');
    setisLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    setisLoggedIn(false);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            isLoggedIn || localStorage.getItem('loggedIn') === 'true' ? (
              <Dashboard onLogout={handleLogout} />
            ) : (
              <Navigate to='/login' />
            )
          }
        />

        <Route path='/login' element={<LoginPage handleLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
