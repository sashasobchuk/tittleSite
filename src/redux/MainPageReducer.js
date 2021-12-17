import {getFilePageApi} from "../api/fileApi";


const SET_FOTO_ITEMS = 'SET_FOTO_ITEMS'
const SET_VIDEO_ITEMS = 'SET_VIDEO_ITEMS'

const defaultStatus = {
    fotoItems: [{image_Url_Name:null,_id:'standard'}],
    videoItems: [{image_Url_Name:null,_id:'standard'}],

}
const MainPageReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case SET_FOTO_ITEMS:
            debugger
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
        debugger
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
