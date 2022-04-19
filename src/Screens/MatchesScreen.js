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
  const [currentMatchState, setCurrentMatchState] = useState(2)

  useEffect(() => {
    Axios.get(`${config.BACKEND_URL}/api/matches`, { withCredentials: true }).then(response => {
      if (response.data.length > 0) {
        setMatches(response.data)
        setLoading(false)  
      } 
    }).catch(err => {
      if(err.response.status === 401) {
        navigate('/login')
      }
    })
  }, [])

  if(loading) {
    return <div>Loading Matches</div>
  }

  const currentMatch = matches[currentMatchState]
  const winner = currentMatch.m_winner
  let winnerTeamScore = 0
  let looserTeamScore = 0

  if (winner === 3) {
    winnerTeamScore = currentMatch.ct_score
    looserTeamScore = currentMatch.t_score
  }

  if (winner === 2) {
    winnerTeamScore = currentMatch.t_score
    looserTeamScore = currentMatch.ct_score
  }

  const winnerTeam = () => {
    
    return currentMatch.players.filter((playerDetail) => playerDetail.team === winner)
  }

  const looserTeam = () => {
    return currentMatch.players.filter((playerDetail) => playerDetail.team !== winner)
  }


  return (

    <MatchesScreenContainer>
      <MatchPresentationBox match={matches[currentMatchState]}>
        <MatchTeam team={winnerTeam()} teamScore={winnerTeamScore}></MatchTeam>
        <MatchTeam team={looserTeam()} teamScore={looserTeamScore}></MatchTeam>
      </MatchPresentationBox>
    </MatchesScreenContainer>
    
  )
}

export default MatchesScreen;