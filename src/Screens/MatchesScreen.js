import { useEffect, useState } from 'react';
import MatchPresentationBox from '../Components/MatchScreenComponents/MatchPresentationBox';
import MatchesScreenContainer from '../Components/MatchScreenComponents/MatchScreenContainer';
import MatchTeam from '../Components/MatchScreenComponents/MatchTeam';

import Axios from 'axios';
import config from '../config';
import { useNavigate } from "react-router-dom";

function MatchesScreen() {

  let navigate = useNavigate()

  const [matches, setMatches] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentMatchState, setCurrentMatchState] = useState(10)

  useEffect(() => {
    Axios.get(`${config.BACKEND_URL}/api/matches`, { withCredentials: true }).then(response => {
      setMatches(response.data)
      setLoading(false)     
    }).catch(err => {
      if(err.response.status === 401) {
        navigate('/login')
      }
    })
  }, [])

  if(loading) {
    return <div>Loading Matches</div>
  }

  const winnerTeam = () => {
    const currentMatch = matches[currentMatchState]
    console.log(currentMatch)
    const winner = currentMatch.m_winner
    return currentMatch.players.filter((playerDetail) => playerDetail.team === winner)
  }

  const looserTeam = () => {
    const currentMatch = matches[currentMatchState]
    const winner = currentMatch.m_winner
    return currentMatch.players.filter((playerDetail) => playerDetail.team !== winner)
  }


  return (

    <MatchesScreenContainer>
      <MatchPresentationBox match={matches[currentMatchState]}>
        <MatchTeam team={winnerTeam()}></MatchTeam>
        <MatchTeam team={looserTeam()}></MatchTeam>
      </MatchPresentationBox>
    </MatchesScreenContainer>
    
  )
}

export default MatchesScreen;