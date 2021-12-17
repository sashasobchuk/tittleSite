import FileItem from "./fileItem";
import clas from './file.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeSortType, DownloadFilePage} from "../../redux/filePageReducer";
import FullFile from "./fullFoto/FullFile";
import PopUp from "./PopUp/PopUp";
import AddFileItem from "./AddFileItem";
import Paginator from "../../acces/Paginator/Paginator";

const File = ({props}) => {
    let fileType = props.fileType

    // debugger
    const fileItems =  useSelector(state=>  state.filePage.fileItems)
    const sortType =  useSelector(state=>  state.filePage.sortType)
    const loading =  useSelector(state=>  state.filePage.loading)

    const totalItemsCount =  useSelector(state=>  state.filePage.totalItemsCount)
    const PageSize =  useSelector(state=>  state.filePage.PageSize)
    const requestPage =  useSelector(state=>  state.filePage.requestPage)


    const dispatch = useDispatch()
    const role = useSelector(state => state.header.role)



    const changeSortTypeHandler = () => {
        let newSortType;
        if(sortType ==='ASC') {
            newSortType = 'DESC'
        }else if(sortType ==='DESC'){
            newSortType = 'ASC'
        }else { alert('error')}
        dispatch(changeSortType(newSortType))
    }
// debugger

    return <>
        <div className={clas.fotoPage}>
            <div className={clas.navContainer} >
                <Paginator props={{totalItemsCount:totalItemsCount
                    ,DownloadFilePage,
                    fileType:fileType,
                    sortType:sortType,
                    changeSortTypeHandler,
                    ReduceRequestPage:requestPage,
                    reducerPageSize:PageSize,
                                    }}/>
            </div>
            {fileItems.map((item,index) =>
            <div key={item._id} className={clas.itemContainer}>
                {fileType === item.fileType && <FileItem  props={{item, index,fileType,loading}}/>}

            </div>
            )}
            {role === 'ADMIN' &&
            <div className={clas.itemContainer}>
                <AddFileItem props={{fileType}}/>
            </div>}
            <PopUp  props={{fileType}}/>
            <FullFile props={{fileItems, fileType}}/>

        </div>

    </>
}
export default File
