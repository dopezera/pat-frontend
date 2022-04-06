import ProfileScreenContainer from "../Components/ProfileScreen/ProfileScreenContainer"
import Profile from "../Components/Profile";
import ProfileContentContainer from "../Components/ProfileScreen/ProfileContentContainer"
import PlayersRankBox from "../Components/PlayersRank";

import Axios from 'axios';
import config from '../config'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {

  const [allPlayers, setAllPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  //se eu remover userInfo de localStorage e recarregar a pagina /profile, vai bugar. mesmo eu fazendo a verificação em App

  let navigate = useNavigate()

  useEffect(() => {
    Axios.get(`${config.BACKEND_URL}/api/users`, { withCredentials: true }).then((response) => {
      setAllPlayers(response.data)
      setLoading(false)
    }).catch(err => {
      if(err.response.status === 401) {
        navigate('/login')
      } 
    })
  }, [])

  if(loading) {
    return <div>Loading Profile</div>
  }

  if(!userInfo) {
    return <div>Loading userInfo</div>
  }

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
