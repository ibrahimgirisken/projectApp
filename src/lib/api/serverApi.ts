import axios from "axios";
export const createServerApi=()=>{
    return axios.create({
        baseURL: '/api/proxy',
        withCredentials:true,
        headers:{
            'Content-Type':'application/json',
        }
    })
}