import React from 'react';

import downloadFotoIcon from './../../acces/forFoto/downloadFotoIcon.png'
import {useDispatch, useSelector} from "react-redux";

import './foto.css'
import { DownloadFotoPage, MakeNewItem, showePopUp} from "../../redux/fotoPageReducer";

const AddFotoItem = () => {
    const dispatch = useDispatch()



    const showPopupHandler=()=>{
        dispatch(showePopUp('flex'))

    }


    return (<>
        <div className='fotoItem fotoItemDownload'>
            <div className="image-upload">
                <img className='fotoItem__imgDiv' width='100%' src={downloadFotoIcon} alt={downloadFotoIcon}
                onClick={showPopupHandler}/>

            </div>

        </div>

    </>)
};

export default AddFotoItem;