import React from 'react';
import clas from './youtobe.module.css'
import {useDispatch} from "react-redux";
import {DeleteItem} from "../../../redux/youtoobeReducer";

const Youtube = ({link}) => {
    const scr =  `https://www.youtube.com/embed/${ link.link}`

    const     dispatch = useDispatch()
    const deleteFotoItemHandler = () => {
        dispatch(DeleteItem(link.id))
    }

    return (
        <div className={clas.iframeFolder}>
            <iframe className={clas.iframe}
                    loading="lazy"
                    src={scr}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
            {true && <button className={clas.deleteItem} onClick={deleteFotoItemHandler} >X</button>}

        </div>
    );
};

export default Youtube;
