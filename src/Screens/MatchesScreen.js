import { useEffect, useState } from 'react';
import MatchPresentationBox from '../Components/MatchScreenComponents/MatchPresentationBox';
import MatchesScreenContainer from '../Components/MatchScreenComponents/MatchScreenContainer';
import MatchTeam from '../Components/MatchScreenComponents/MatchTeam';

import Axios from 'axios';
import config from '../config';

function MatchesScreen() {

  const [matches, setMatches] = useState(null)
  const [currentMatchState, setCurrentMatchState] = useState(10)

  useEffect(() => {
    Axios.get(`${config.BACKEND_URL}/api/matches`).then(response => {
      setMatches(response.data)
    })
  }, [])

  if (!matches) return null;
  console.log(matches)


  const winnerTeam = () => {
    const currentMatch = matches[currentMatchState]
    const winner = currentMatch.players_details[0].m_winner
    return currentMatch.players_details.filter((playerDetail) => playerDetail.team === winner)
  }

  const looserTeam = () => {
    const currentMatch = matches[49]
    const winner = currentMatch.players_details[0].m_winner
    return currentMatch.players_details.filter((playerDetail) => playerDetail.team !== winner)
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
