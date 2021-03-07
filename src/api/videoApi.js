import * as axios from "axios";
import {hostUrl} from "../acces/config"



export const getVideoPageApi = async () => {
    try {
        return await axios.get(`${hostUrl}video/getVideoPage`,{})

    } catch (e) {
        alert('proplemin getVideoPageApi', e)
    }
}
export const uploadNewItem = async (video) => {
    try {
        const formData = new FormData()
        formData.append('video',video)
        return await axios.post(`${hostUrl}video/videoUpload`,formData,
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )

    } catch (e) {
        alert('problem uploadNewItem', e)
    }
}
export const addCommentAPI = async (text,itemId) => {
    try {
        return await axios.post(`${hostUrl}video/addComment`, {

            comment:text,
            videoItemId:itemId

        },{})

    } catch (e) {
        alert('problem addCommentAPI', e)
    }
}
export const deleteCommentAPI = async (commentId) => {
    try {
        return await axios.delete(`${hostUrl}video/deleteComment?commentID=${commentId}`,{})

    } catch (e) {
        alert('problem ideleteCommentAPI', e)
    }
}
export const deleteItemAPI = async (ItemId) => {
    try {

        return await axios.delete(`${hostUrl}video/deleteVideoItem?videoItemId=${ItemId}`, {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            }
        )
    }
    catch (e) {
        alert('problem in  deleteItemAPI', e)
    }
}
export const LoginApi = async (email,password) => {
    try {
        return await axios.post(`${hostUrl}auth/login`,{
            email,
            password
        },{})
        // return await axios.delete(`${hostUrl}video/deleteComment?commentID=${commentId}`,{})

    } catch (e) {
        alert('problem LoginApi', e)
    }
}
export const authApi = async () => {
    try {

        return await axios.get(`${hostUrl}auth/auth`,{headers:{
                authorization:`Bearer ${localStorage.getItem('token')}`
            }})
    } catch (e) {
        console.log('problem in authApi', e)
    }
}
