import axios from "axios"

export default axios.create({
    baseURL : 'https://spetaxi.herokuapp.com',
    headers: { 'Accept': 'application/json' },
})

