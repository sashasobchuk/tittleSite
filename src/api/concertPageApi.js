import {errorReporte, instanse} from "./api";


export const getConcertPageApi = async () => {

    try {
        return await instanse.get(`concerts/getItems`,{
            headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })

    } catch (e) {
        errorReporte('proplemin getConcertPageApi', e)
    }
}
export const addCItemAPI = async (date,citi,status,isDone,text='') => {

    // debugger
    try {
        const formData = new FormData()
        formData.append('status',status)
        formData.append('date',date)
        formData.append('citi',citi)
        formData.append('text',text)
        return await instanse.post(`concerts/setItem`,formData,
        )

    } catch (e) {
        errorReporte('proplemin AddCItemAPI', e)
    }
}

export const deleteCItemAPI = async ( _id) => {
    debugger
    try {
        return await instanse.delete(`concerts/deleteItem?id=${_id}`)
    } catch (e) {
        errorReporte('proplemin deleteCItemAPI', e)
    }
}








