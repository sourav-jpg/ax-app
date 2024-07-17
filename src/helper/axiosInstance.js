import axios from "axios";

let axiosInstance = axios.create({
    baseURL : "http://localhost:4000/"
    
})

let axiosGet = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/comments"
})


export {
    axiosInstance,
    axiosGet
} 