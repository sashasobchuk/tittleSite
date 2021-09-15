import {names} from '../filePageReducer'



export type defaultStateType = {
    popupDisplay: 'none' | 'block'
    item: itemType
    fileItems: Array<fileItemType>
    fullFileItem:number,
    FullFIleDisplay:boolean,
    newFileTittle:string,
    sortType:'ASC'|'DESC',
    totalItemsCount:number,
    PageSize:number,
    requestPage:number
    loading:boolean
}


export type fileItemType = {
    _id: string
    tittle: string
    image_Url_Name: string
    likes: number,
    fileComments: Array<fileComentType>
    fileType:'foto'|'video';
}

export type fileComentType = {
    _id: string
    value: string
    date: any
    fileItems: string
    likes: number
    user_storage_id: string
    status:boolean,
    addDate:string

}



export type itemType = {
    fileComments: []
}

/* actions*/


export  type  filePageType= {
    date:string
    fileComments: Array<fileComentType>
    image_Url_Name: string
    likes: number
    size: number
    title: string
    type: string
    __v: 0
    _id: "606afdf25fa4720015adb677"
}
export  type setFilePageType = {
    type: typeof names.SET_FILE_PAGE,
    filePage:filePageType
}















