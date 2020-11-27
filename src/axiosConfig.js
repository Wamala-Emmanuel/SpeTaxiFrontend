import axios from "axios"

export default axios.create ({
    baseURL : 'https://axios-app.firebaseio.com',
    headers: {'Accept': 'application/json'},
  })

 