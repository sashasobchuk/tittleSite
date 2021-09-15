import * as axios from "axios";
import {hostUrl} from "../acces/config"


let token = localStorage.getItem('token')

if(!(token!==null && token.length >0)){
    token='';
}
export const instanse = axios.create({
    baseURL: hostUrl,
    headers: {token: token, "Content-Type": "multipart/form-data"},

})


export const getFilePageApi = async (fileType,sortType,start,limit) => {
     try {
        return await  instanse.get(`file/getFiles?fileType=${fileType}&sortType=${sortType}&start=${start}&limit=${limit}`)

    } catch (e) {
         console.log('proplemin getFotoPageApi', e)
    }
}
export const changeCommentStatusApi = async (id,status) => {
     try {
         const formData = new FormData()
         formData.append('id_comment',id)
         formData.append('status', Boolean( status))
        return await  instanse.post(`file/changeCommentStatus`, formData)
    } catch (e) {
         console.log('proplemin getFotoPageApi', e)
    }
}
export const uploadNewItemApi = async (foto,tittle) => {
     try {
        const formData = new FormData()
         formData.append('file',foto)
         formData.append('tittle',tittle)
        return await instanse.post(`file/setFile`,formData)

    } catch (e) {
         console.log('problem in uploadNewItem', e)
    }
}
export const addCommentAPI = async (text,itemId,userId) => {
    // debugger
     try {
         const formData = new FormData()
         formData.append('text',text)
         formData.append('id_file',itemId)
         formData.append('userId',userId)

         // debugger
        return await instanse.post(`file/addComment`, formData)

    } catch (e) {
         console.log('problem in addCommentAPI', e)
    }
}
export const AdmindeleteCommentAPI = async (commentId,user_storage_id) => {
     try {
        return await instanse.delete(`file/deleteComment?id_comment=${commentId}&user_storage_id=${user_storage_id}`)
    } catch (e) {
         console.log('problem in deleteCommentAPI', e)
    }
}

export const deleteItemAPI = async (ItemId) => {
    // debugger
     try {
         return await instanse.delete(`file/deleteFile?id_file=${ItemId}`,
         )
     }
     catch (e) {
         alert('problem in  deleteItemAPI', e)
    }
}
export const deleteCommentAPI = async (commentId,userId,user_storage_id) => {
    try {
        return await instanse.delete(`video/deleteComment?id_comment=${commentId}&userId=${userId}&user_storage_id=${user_storage_id}`,{
        })
    } catch (e) {
        console.log('problem ideleteCommentAPI', e)
    }
}


