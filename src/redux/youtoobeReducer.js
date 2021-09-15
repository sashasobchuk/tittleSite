
import {deleteItemApi, getLinks, postYouTubeItem12,} from "../api/youtobeApi";
export const SAFE_LINKS = 'SAFE_LINKS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_ITEM = 'ADD_ITEM'



const defaultStatus = {
    popupDisplay:'none',
    links:[
        {id: 'standart',link:'gCt5nKuCc7E'},
    ]


}
const videoPageReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        case SAFE_LINKS:
            return {...state,links:[...action.links] }
        case REMOVE_ITEM:
            return {...state,links: [...state.links.filter((item)=>item.id !== action.id)]}
        case ADD_ITEM:
            return {...state,links: [...state.links,{id:action.id,link: action.link}]}
        default:
            return state
    }
}


export const setVideoPage=(links)=>({type:SAFE_LINKS,links})
export const remomeItem=(id)=>({type:REMOVE_ITEM,id})
export const setItem=(id,link)=>({type:ADD_ITEM,id,link})
export const downloadYouTube = () => async (dispatch) => {
    try {
        let response = await getLinks()
        await dispatch(setVideoPage(response.data))
    }catch (e) {
        console.log(e)
    }

}
export const DeleteItem = (id) => async (dispatch) => {
    try {
        let response = await deleteItemApi(id)
        // debugger
        if(response.status ===200){
            await dispatch(remomeItem(id))
        }
    }catch (e) {
        console.log(e)
    }
}
export const postItem = (link) => async (dispatch) => {
    try {
/** example link https://www.youtube.com/watch?v=OF7bh0Y3vyo     */
        let safeLink = link.split('v=')[1]
        if(safeLink.split('&')>0){
            safeLink=safeLink.split('&')[0]
        }
        let response = await postYouTubeItem12(link)
        if(response.status ===200){
            // debugger
            dispatch(setItem(response.data,safeLink))
        }
    }
    catch (e) {
        console.log(e)
    }
}


export default videoPageReducer

