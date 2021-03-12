import {authApi, LoginApi} from "../api/api";


const SET_FOTO_ITEMS = 'SET_FOTO_ITEMS'
const SET_VIDEO_ITEMS = 'SET_VIDEO_ITEMS'

const defaultStatus = {
    fotoItems: [],
    videoItems: []

}
const MainPageReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case SET_FOTO_ITEMS: return {...state, fotoItems: action.fotoResponse}
        case SET_VIDEO_ITEMS: return {...state, videoItems: action.videoItems}

        default: return state
    }
}
export const setFotoItems = (fotoResponse) => ({type: SET_FOTO_ITEMS,fotoResponse})
export const setVideoItems = (videoResponse) => ({type: SET_VIDEO_ITEMS,videoResponse})




// export const DownLoAdMainPage = () => async (dispatch) => {
//     try {
//         const fotoResponse = await downloadFotoItems()
//         if (response.status === 200) {
//             dispatch(setFotoItems(fotoResponse))
//         }
//             const videoResponse = await downloadVideoItems()
//         if (response.status === 200) {
//             if (response.status === 200) {
//                 dispatch(setVideoItems(videoResponse))
//             }
//         }
//     } catch (e) {
//         console.log('trouble DownLoAdMainPage', e)
//     }
// }

export default MainPageReducer
