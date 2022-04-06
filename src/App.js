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

/* Logica: 
em App.js eu defino que const userInfo = JSON.parse(localStorage.getItem('userInfo'))
quando o App roda, uso verifyUserInfo(userInfo) pra ver se tem algo lá de fato, senão vou buscar no Cookie através de requisição a /api/users/isauth
se num tem nada nem no cookie nem em localStorage significa que o usuário vai ser redirecionado pra /login ao tentar fazer alguma requisição sem autorização
sempre que acesso /login e realizo login, atualizo o token no cookie e também localStorage com as informações do usuário
*/

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
