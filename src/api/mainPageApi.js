import * as axios from "axios";
import {hostUrl} from "../acces/config"



export const downloadFotoItems = async () => {

    try {
        return await axios.get(`${hostUrl}concerts/getPage`,{
        })

    } catch (e) {
        alert('proplemin getConcertPageApi', e)
    }
}

export const downloadVideoItems = async () => {

    try {
        return await axios.get(`${hostUrl}concerts/getPage`,{
        })

    } catch (e) {
        alert('proplemin getConcertPageApi', e)
    }
}



