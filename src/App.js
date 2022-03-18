import Navbar from './Components/Navbar';
import EventsScreen from './Screens/EventScreen';
import MatchesScreen from './Screens/MatchesScreen';
import ProfileScreen from './Screens/ProfileScreen';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import { Box } from '@mui/material';
import AppWrapper from './Components/AppWrapper';
import TeamDefinitionScreen from './Screens/TeamDefinitionScreen';
import LoginScreen from './Screens/LoginScreen';
import axios from 'axios'


axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = ['http://localhost:5000'];
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo3LCJ1c2VybmFtZSI6IkRPUEUiLCJlbWFpbCI6bnVsbCwic3RlYW1pZCI6Ijc2NTYxMTk4MjQxNTY1OTEwIiwicGFzc3dvcmQiOm51bGwsImtkciI6MCwid2luUGVyY2VudGFnZSI6MCwiaW1wYWN0IjowLCJpc0FkbWluIjpmYWxzZSwicGxhbiI6MCwiY3JlYXRlZEF0IjoiMjAyMi0wMy0wMlQxOToyOTo1Ny4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMi0wMy0wMlQxOToyOTo1Ny4wMDBaIn0sImlhdCI6MTY0NzYyMjA0NywiZXhwIjoxNjQ3NjI5MjQ3fQ.z6FbNTJaHvcUcLhQJz6CaEZf7LGDi1RCABZcMVBhI4w'
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);



function App() {
  return (
    <>
    <Router>
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
    <Navbar></Navbar>
    <AppWrapper>
    <Routes>
      <Route path='/profile' element={<ProfileScreen></ProfileScreen>} exact></Route>
      <Route path='/matches' element={<MatchesScreen></MatchesScreen>} exact></Route>
      <Route path='/events' element={<EventsScreen></EventsScreen>} exact></Route>
      <Route path='/teams' element={<TeamDefinitionScreen></TeamDefinitionScreen>} exact></Route>
      <Route path='/login' element={<LoginScreen></LoginScreen>} exact></Route>
      <Route path='*' element={<h1>404</h1>}></Route>
    </Routes>
    </AppWrapper>
    
    <Footer></Footer>
    </Box>
    </Router>
      
      
    </>
      
      
        
  )
}

export default App;
