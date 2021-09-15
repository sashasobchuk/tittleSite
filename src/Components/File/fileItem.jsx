import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import clas from './file.module.css'
import {
    addComment_T, changeCommentStatus,
    DeleteComment_T,
    DeleteItem_T, showFullFile,
} from "../../redux/filePageReducer";
import Preloader from '../../acces/Preloader/Preloader'



const FileItem = ({props}) => {
    const [inputValue, changeInputValue] = useState('комент заглушка')
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.header.isAuth)
    const role = useSelector(state => state.header.role)
    const ChangeInputHandler = (e) => {
        changeInputValue(e.currentTarget.value)
    }


    const enterAddComment = (e) => {
        /** при нажаті на ентер також запускаєм  addCommentHandler*/
        if (e.key === 'Enter') {
            addCommentHandler()
        }
    }
    const addCommentHandler = () => {
        dispatch(addComment_T(inputValue, props.item._id))
        /** зануляєм після відправлення**/
        changeInputValue('')


    }
    const deleteCommentHandler = (commentId) => {
        dispatch(DeleteComment_T(commentId, props.item._id))
    }
    const deleteFileItemHandler = () => {
        dispatch(DeleteItem_T(props.item._id,props.fileType))
    }
    const showFullFileHandler = (e) => {
        // debugger
        dispatch(showFullFile(props.index))
    }
    const changeStatusHandler = (id, status) => {
        dispatch(changeCommentStatus(id, status))
    }
    let thisuUser_storage_id = localStorage.getItem('userId')


    // debugger
    const fileSrc = props.item.image_Url_Name

    const File = ()=> {
        return(
            props.fileType === 'foto'
                ? < img className={clas.file} onClick={(e) => showFullFileHandler(e)} src={fileSrc} alt='foto'/>
                : <video width='100%' controls className={clas.file} src={fileSrc}/>
        )
    }

    const file =  (props.loading  ===true ? <Preloader/> :<File/>
    )
    // debugger
    return (
        <>
            <div className={clas.fotoItem}>
                <div className={clas.tittleFolder}><span className={clas.tittle}>{props.item.tittle}</span></div>
                {file}
                {role === 'ADMIN' && <button className={clas.deleteItem} onClick={deleteFileItemHandler}>X</button>}


                <div className={clas.downItemFolder}>
                    {props.item.fileComments.map((comment) => (comment.status || comment.user_storage_id === thisuUser_storage_id || role === 'ADMIN' ) &&
                        <div key={comment._id} className={clas.oneComentFolder}>
                                 <div className={clas.commentValue}>{comment.value}</div>



                            {((comment.user_storage_id === thisuUser_storage_id) || isAuth) &&
                            <div className={clas.BTNrightComment}>
                                {role === 'ADMIN' &&
                                <button onClick={() => deleteCommentHandler(comment._id)}>X</button>}
                                {role === 'ADMIN' &&
                                <button onClick={() => changeStatusHandler(comment._id, comment.status)}>
                                    {comment.status ? 'shown' : 'hidden'}
                                </button>}
                            </div>}


                        </div>
                    )}

                    <div className={clas.inputFolder}>
                        <input className={clas.input} type="text" placeholder='comment' value={inputValue}
                               onKeyDown={(e) => enterAddComment(e)}
                               onChange={(e) => ChangeInputHandler(e)}/>
                        <button className={clas.btnADD} onClick={() => addCommentHandler()}> додати</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FileItem