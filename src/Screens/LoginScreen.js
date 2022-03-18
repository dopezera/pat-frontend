import { Button } from "@material-ui/core";
import { useEffect } from "react";
import config from "../config";

import { useNavigate } from "react-router-dom";

function LoginScreen() {

  let navigate = useNavigate()

  const handleLogin = () => {
      const popupWindow = window.open(
        config.BACKEND_URL + '/api/users/auth/steam',
        '_blank',
        'width=800, height=600',
      )
      if (window.focus) popupWindow.focus()
    }

  useEffect(() => {
    window.addEventListener('message', event => {

      if (event.origin !== config.BACKEND_URL) {
        return
      }

      if (event.data) {
        localStorage.setItem('userInfo', JSON.stringify(event.data))
        navigate('/profile')
      }
    })
  }, [])

  return (   
        <Button onClick={handleLogin}>Login</Button>
  )
}

export default LoginScreen;
