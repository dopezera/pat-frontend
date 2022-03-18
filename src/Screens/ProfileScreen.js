import ProfileScreenContainer from "../Components/ProfileScreen/ProfileScreenContainer"
import Profile from "../Components/Profile";
import ProfileContentContainer from "../Components/ProfileScreen/ProfileContentContainer"
import PlayersRankBox from "../Components/PlayersRank";

import Axios from 'axios';
import config from '../config'
import { useEffect, useState } from "react";

function ProfileScreen() {

  const [allPlayers, setAllPlayers] = useState([])
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))

  useEffect(() => {
    Axios.get(`${config.BACKEND_URL}/api/users`).then((response) => {
      setAllPlayers(response.data)
      console.log(userInfo)
    })
  }, [])

  if (!allPlayers) return null

  return (
    <ProfileScreenContainer>
      <ProfileContentContainer>
        <Profile user={userInfo}></Profile>
        <PlayersRankBox players={allPlayers}></PlayersRankBox>
      </ProfileContentContainer>
    </ProfileScreenContainer>
  )
}

export default ProfileScreen;
