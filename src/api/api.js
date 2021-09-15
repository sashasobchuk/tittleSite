import * as axios from "axios";
import {hostUrl} from "../acces/config"
import {stringify} from "querystring";


let token = localStorage.getItem('token')

if(!(token!==null && token.length >0)){
    token='';
}
export const instanse = axios.create({
    baseURL: hostUrl,
    headers: {token: token, "Content-Type": "multipart/form-data"},
})

let deploy = false
export  const errorReporte =(string,e)=>{
    if(deploy){
        alert(JSON.stringify(e) + string)
    }else {
        console.warn(JSON.stringify(e)  + string)
    }

}

export const deleteItemAPI = async (ItemId) => {
     try {
         return await instanse.delete(`foto/deleteFoto?id_foto=${ItemId}`,
         )
     }
     catch (e) {
         errorReporte('problem in  deleteItemAPI', e)
    }
}
export const LoginApi = async (login,password) => {
     try {
         let formData = new FormData()
         formData.append('login',login)
         formData.append('password',password)
         return await instanse.post(`${hostUrl}auth/login`,formData)
    } catch (e) {
         errorReporte('problem in LoginApi ', e)
    }
}

