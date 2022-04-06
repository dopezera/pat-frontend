
import Axios from 'axios';
import config from './config'

export default function verifyUserInfo(userInfo) {


    if (!userInfo) { //pegando userInfo dos cookies
        Axios.get(`${config.BACKEND_URL}/api/users/isauth`, { withCredentials: true }).then((response) => {
          localStorage.setItem('userInfo', JSON.stringify(response.data))
        }).catch(err => {
          if(err) {
            console.log('Error in App useEffect')
            console.log(userInfo)
          } 
        })
        }

}