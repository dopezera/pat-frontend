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
import { useEffect, useState } from 'react';

import verifyUserInfo from './controlUserInfo';
//estou verificando se userInfo já tá em localStorage e se não estiver eu faço a requisição pra pegar dos cookies
//ta gambiarroso pois no retorno de loginscreen eu seto em localstorage mas tb seto aqui no app
const userInfo = JSON.parse(localStorage.getItem('userInfo'))

function App() {

  useEffect(() => {
    verifyUserInfo(userInfo)
  }, [])

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
      <Route path='*' element={<h1>404 - Página não encontrada</h1>}></Route>
    </Routes>
    </AppWrapper>
    <Footer></Footer>
    </Box>
    </Router>
    </> 
  )
}

export default App;
