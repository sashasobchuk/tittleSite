import {errorReporte, instanse} from "./api";


export const getLinks = async () => {
    try {
        return await instanse.get(`youTube/getLinks`,{})

    } catch (e) {
        errorReporte('proplemin getVideoPageApi', e)
    }
}

export const deleteItemApi = async (id) => {
    try {
        return await instanse.delete(`youTube/deleteItem?id=${id}`,{
        })
    } catch (e) {
        errorReporte('problem ideleteCommentAPI', e)
    }
}
export const postYouTubeItem12 = async (link) => {
    try {
        const  formData = new FormData()
        formData.append('link',link)
        return await instanse.post(`youTube/postItem`,formData,
        {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        )
    } catch (e) {
        errorReporte('problem ideleteCommentAPI', e)
    }
}








