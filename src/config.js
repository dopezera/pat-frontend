const common = {
}

const config = {
  development: {
    ...common,
    FRONTEND_URL: 'http://localhost:3000',
    BACKEND_URL: 'http://localhost:5000',
  },

  production: {
    ...common,
    FRONTEND_URL: 'https://mixcsgo.herokuapp.com',
    BACKEND_URL: 'https://api-mixcsgo.herokuapp.com',
  },
}

export default (environment => {
  if (!environment) environment = 'development'
  return config[process.env.REACT_APP_ENV || environment]
})()
