import {getFilePageApi} from "../api/fileApi";
import image from '../acces/forFoto/2.jpg'
import image2 from '../acces/forFoto/1.png'
import image3 from '../acces/forFoto/4.gif'
import image4 from '../acces/forFoto/11jpg.jpg'
import image5 from '../acces/forFoto/555.jpg'
import video from '../acces/video/v.mp4'
import video2 from '../acces/video/2.mp4'


const SET_FOTO_ITEMS = 'SET_FOTO_ITEMS'
const SET_VIDEO_ITEMS = 'SET_VIDEO_ITEMS'

const defaultStatus = {
    fotoItems: [
        {image_Url_Name:image5,_id:'standard'},
        {image_Url_Name:image,_id:'standard'},
        {image_Url_Name:image3,_id:'standard'},
        {image_Url_Name:image,_id:'standard'},
        {image_Url_Name:image2,_id:'standard'},
        {image_Url_Name:image,_id:'standard'},
        {image_Url_Name:image4,_id:'standard'},
        {image_Url_Name:image,_id:'standard'},
    ],
    videoItems: [
        {image_Url_Name:video,_id:'standard'},
        {image_Url_Name:video2,_id:'standard'},
        {image_Url_Name:video,_id:'standard'},
        {image_Url_Name:video2,_id:'standard'},
    ],

}
const MainPageReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case SET_FOTO_ITEMS:
            // debugger
            return {...state, fotoItems: action.fotoResponse}
        case SET_VIDEO_ITEMS:
            return {...state, videoItems: action.videoResponse}

        default:
            return state
    }
}
export const setFotoItems = (fotoResponse) => ({type: SET_FOTO_ITEMS, fotoResponse})
export const setVideoItems = (videoResponse) => ({type: SET_VIDEO_ITEMS, videoResponse})


export const DownLoAdMainPage = (sortType,startParam,pageSize) => async (dispatch) => {
    try {
        const fotoResponse = await getFilePageApi('foto',sortType,startParam,pageSize)
        // debugger
        if (fotoResponse.status === 200) {
            dispatch(setFotoItems(fotoResponse.data.items))
        }
        const videoResponse = await getFilePageApi('video',sortType,startParam,pageSize)
        if (videoResponse.status === 200) {
            dispatch(setVideoItems(videoResponse.data.items))
        }
    } catch (e) {
        console.log('trouble DownLoAdMainPage', e)
    }
}

export default MainPageReducer
