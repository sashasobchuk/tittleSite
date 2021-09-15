
import {defaultStateType, filePageType, fileItemType, setFilePageType} from "./typs/fileReducer"

import {
    addCommentAPI,
    AdmindeleteCommentAPI, changeCommentStatusApi,
    deleteItemAPI,
    getFilePageApi, uploadNewItemApi
} from "../api/fileApi";


 const DOWNLOAD_FILE = 'DOWNLOAD_FILE'
const SET_FILES= 'SET_FILES'


 const ADD_COMMENT = 'ADD_COMMENT'
 const SET_FILE_PAGE = 'SET_FILE_PAGE'
 const DELETE_COMMENT = 'DELETE_COMMENT'
 const SHOWE_POPUP = 'SHOWE_POPUP'
 const CLOSE_POPUP = 'CLOSE_POPUP'
 const SHOVE_FULL_FILE_ITEM = 'SHOVE_FULL_FILE_ITEM'
 const HIDE_FULL_FILE_ITEM = 'HIDE_FULL_FILE_ITEM'
const TO_LEFT_FULL_FILE = 'TO_LEFT_FULL_FILE'
const TO_RIGHT_FULL_FILE = 'TO_RIGHT_FULL_FILE'
const CHANGE_NEW_FILE_TITTLE = 'CHANGE_NEW_FILE_TITTLE'
const CHANGE_COMMENT_STATUS = 'CHANGE_COMMENT_STATUS'
const CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE'
const CHANGE_TOTAL_COUNT = 'CHANGE_TOTAL_COUNT'
const SET_REQUEST_PAGE = 'SET_REQUEST_PAGE'
const CHANGE_LOADING = 'CHANGE_LOADING'


export const   names = {DOWNLOAD_FILE,
    ADD_COMMENT,
    SET_FILES,
    SET_FILE_PAGE,
    DELETE_COMMENT,
    SHOWE_POPUP,
    CLOSE_POPUP,
    SHOVE_FULL_FILE_ITEM,
    HIDE_FULL_FILE_ITEM,
}


const defaultState:defaultStateType = {
    popupDisplay:'none',
    newFileTittle:'',
    item:{
        fileComments:[]
    },
    sortType:'ASC',
    totalItemsCount:10,
    PageSize:10,

    requestPage:3,
    loading: false,


    fileItems: [
        {
            _id: 'standard',
            tittle: '2name of foto',
            image_Url_Name: 'https://images.unsplash.com/photo-1574217013471-c32c6846cef7?ixid=' +
                'MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm90b3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            fileType:'foto',
            likes:0,
            fileComments: [
                {_id: 'm1', value: 'hello comment',date: 0,fileItems: '',likes:0,user_storage_id: '',status: false,addDate:''},
                {_id: 'm2', value: 'hello comment2',date: 0,fileItems: '',likes:0,user_storage_id: '',status: false,addDate:''},
            ],
        },
    ],
    fullFileItem:0,
    FullFIleDisplay:false,
}
const filePageReducer = (state:defaultStateType = defaultState, action:any) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                fileItems: [...state.fileItems.map((item:fileItemType) => item._id !== action.Item_id
                        ? item
                        : {...item,
                        fileComments:[
                            {_id: action.id_comment, value: action.fileComment,date: action.addDate,fileItems: '',likes:0,userId: ''},
                            ...item.fileComments,
                    ]
                })],
            }
        case DELETE_COMMENT:
            return {...state,
                fileItems:[...state.fileItems.map((item)=>({...item,
                    fileComments:[...item.fileComments.filter(
                        ((comment)=>   comment._id !== action.deletedId )
                    )]}))]}
        case CHANGE_COMMENT_STATUS:
            return {...state,
                fileItems:[...state.fileItems.map((item)=>({...item,
                    fileComments:[...item.fileComments.map(((comment)=>   comment._id !== action.id
                        ?comment
                        : {...comment,status:!comment.status})
                    )]}))]}
        case SHOWE_POPUP:return {...state,popupDisplay:'flex'}
        case CLOSE_POPUP:return {...state,popupDisplay:action.display}
        case SET_REQUEST_PAGE:return {...state,requestPage:action.requestPage}

        case SET_FILE_PAGE:return {...state, fileItems: action.filePage}
        case CHANGE_NEW_FILE_TITTLE:return {...state, newFileTittle: action.newFileTittle}
        case CHANGE_LOADING:return {...state, loading: action.loading}

        case SHOVE_FULL_FILE_ITEM:return {...state,fullFileItem : action.number,FullFIleDisplay:true }
        case HIDE_FULL_FILE_ITEM:return {...state,FullFIleDisplay:false }

        case TO_LEFT_FULL_FILE:
            return {...state,fullFileItem :(state.fullFileItem>0?state.fullFileItem-1:state.fullFileItem)}
        case TO_RIGHT_FULL_FILE:
            return {...state,fullFileItem :(state.fullFileItem < (state.fileItems.length - 1)?state.fullFileItem+1:state.fullFileItem)}
        case CHANGE_SORT_TYPE:
            return {...state,sortType:action.sortType}
        case CHANGE_TOTAL_COUNT:
            return {...state,totalItemsCount:action.totalCount}

        default:
            return state
    }
}

export const showFullFile = (number:number) => ({type: SHOVE_FULL_FILE_ITEM, number})
export const hideFullFile = () => ({type: HIDE_FULL_FILE_ITEM})
export const setRequestPage = (requestPage:number) => ({type: SET_REQUEST_PAGE,requestPage})
export const changeLoading = (loading:boolean) => ({type: CHANGE_LOADING,loading})



export const changeNewCommentStatus = (id:number) => ({type: CHANGE_COMMENT_STATUS, id})

export const changeNewFileTittle = (newFileTittle:string) => ({type: CHANGE_NEW_FILE_TITTLE,newFileTittle})

export const toLeftFoto = () => ({type: TO_LEFT_FULL_FILE})
export const toRightFoto = () => ({type: TO_RIGHT_FULL_FILE})


export const setFilePage = (filePage:filePageType):setFilePageType => ({type: SET_FILE_PAGE, filePage});

export const addComment = (fileComment:string, Item_id:number,id_comment:number,addDate:Date) => ({type: ADD_COMMENT, fileComment, Item_id,id_comment,addDate})
export const deleteComment = (deletedId:number,idItemId:number) => ({type: DELETE_COMMENT, deletedId,idItemId})

export const showePopUp = (display:any) => ({type: SHOWE_POPUP, display})
export const closePopUp = (display:any) => ({type: CLOSE_POPUP, display})

export const changeSortType = (sortType:sortType) => ({type: CHANGE_SORT_TYPE,sortType})
export const setTotalCout = (totalCount:number) => ({type: CHANGE_TOTAL_COUNT,totalCount})



type sortType = 'ASC'| 'DESC';
export const DownloadFilePage = (fileType:string,sortType:sortType = 'ASC',start:number=0,limit:number=10) =>
    async (dispatch:any) => {
    try {

        let response = await getFilePageApi(fileType,sortType,start,limit)
        await dispatch(changeSortType(sortType))
        await dispatch(setFilePage(response.data.items))
        await dispatch(setTotalCout(response.data.totalCount))

    }
    catch (e) {
        console.log("ine DownloadFilePage ",e)
    }
}
export const changeCommentStatus = (id:number,status: boolean) => async (dispatch:any) => {
    try {
        let response = await changeCommentStatusApi(id,!status)
        if(response.status === 200){
            dispatch(changeNewCommentStatus(id))
        }
    }
    catch (e) {
        console.log("ine changeCommentStatus ",e)
    }
}
export const addComment_T = (text:any, itemId:any) => async (dispatch:any) => {
    try {
       if (text) {
            const userId = localStorage.getItem('userId')
            let response = await addCommentAPI(text, itemId,userId)
            if (response.status === 200) {
                dispatch(addComment(text,itemId,response.data.id_comment,response.data.addDate))
            }
        } else {
            console.log('trouble in get back uploaded comment')
        }
    } catch (e) {
        console.log('trouble in get back uploaded comment2', e)
    }

}
export const DeleteComment_T = (commentId:number,idItemId:number) => async (dispatch:any) => {

    try {
        const user_storage_id = localStorage.getItem('userId')

        if (commentId ) {
            /* перірка що commentId не null undefined or '' */
            let response =  await AdmindeleteCommentAPI(commentId,user_storage_id)
            if (response.status === 200) {
                dispatch(deleteComment(Number (commentId),idItemId,))
            }else if( response.status === 401 ){
                console.log('permision denied')
            }
        } else {
            console.log('trouble in get back delete comment')
            return undefined
        }
    } catch (e) {
        console.log('trouble in get back delete comment2', e)
    }

}
export const DeleteItem_T = (ItemId:any,fileType:fileType) => async (dispatch:any) => {
    try {
        if (ItemId) {
            /* перірка що commentId не null undefined or '' */
            let response = await deleteItemAPI(ItemId)
            if (response.status === 200) {
                dispatch(DownloadFilePage(fileType))
            }
        } else {
            console.log('trouble in get back uploaded comment')
            return undefined
        }
    } catch (e) {
        console.log('trouble in get back uploaded comment2', e)
    }

}

type fileType = 'foto' |'video' ;
export const MakeNewItem = (file:any,tittle:string,fileType:fileType) => async (dispatch:any) => {
      await uploadNewItemApi(file,tittle)

    dispatch(DownloadFilePage(fileType))

}
export default filePageReducer


