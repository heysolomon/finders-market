import axios from "axios";

export const api = axios.create({
    baseURL: "https://morning-headland-70594.herokuapp.com"
    // headers: {
    //     'Content-Type': 'application/json'
    // }
})
