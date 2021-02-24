import img from './../acces/foto/1.jpg'

const SET_FILES = 'SET_FILES'

const item = {
    id: '423987',
    tittle: 'name of foto',
    img: img,
    comments: [
        {id: 'i423', value: 'hello comment'}
    ]

}

const defaultStatus = {
    oneImage: {
        id: '423987',
        tittle: 'name of foto',
        img: img,
        comments: [
            {id: 'i423', value: 'hello comment'}
        ]
    }

}


const fotoPageReducer = (state = defaultStatus, action) => {
    switch (action.type) {


        /*        case SET_FILES:return {...state, files: action.payload}

                case SET_CURRENT_DIT:return {...state, currentDir: action.payload}
                case ADD_FILE:return {...state, files:[...state.files, action.payload]}
                case SET_POPUP_DISPLAY:return {...state,popupDisplay:action.payload}
                case DELETE_FILE:return {...state,files:[...state.files.filter(file=>file._id !== action.payload)]}

                case PUSH_TO_STACK:return {...state,dirStack:[...state.dirStack,action.payload]}
                case SET_VIEW:return {...state,view: action.payload}*/
        // case REMOVE_FROM_STACK:return {...state,popupDisplay:action.payload}
        default:
            return state
    }
}

/*export const setFiles = (files) => ({type: SET_FILES, payload: files})
export const setCurrentDir = (dir) => ({type: SET_CURRENT_DIT, payload: dir})
export const addFiles = (file) => ({type: ADD_FILE, payload: file})
export const setPopupDisplay = (display) => ({type: SET_POPUP_DISPLAY, payload: display})
export const pushToStack = (dir) => ({type: PUSH_TO_STACK, payload: dir})
export const deleteFileAction = (dirId) => ({type: DELETE_FILE, payload: dirId})
export const setView = (view) => ({type: SET_VIEW, payload: view})*/
// export const removeFromStack = (display) => ({type: REMOVE_FROM_STACK, payload: display})

export default fotoPageReducer








