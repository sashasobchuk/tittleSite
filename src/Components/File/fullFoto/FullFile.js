import React from 'react';
import clas from './fullFoto.module.css'
import {useDispatch, useSelector} from "react-redux";
import img from '../../../acces/forFoto/2.jpg'
import { hideFullFile, toLeftFoto, toRightFoto} from "../../../redux/filePageReducer";

const FullFile = ({props}) => {

    const display = useSelector(state => state.filePage.FullFIleDisplay)
    const number = useSelector(state => state.filePage.fullFileItem)

    let item = props.fileItems[number]
    // debugger
    let imgSrc = item!==undefined? item.image_Url_Name : ''
    let dispatch = useDispatch()
    const toleft = () => {
             dispatch(toLeftFoto())
    }
    const toRight = () => {
            dispatch(toRightFoto())
    }
    const exitHandler = () => {
        dispatch(hideFullFile())
    }
// debugger
    return (
        <div className={clas.container} style={{display: (display ? 'flex' : 'none')}}>
            <button className={clas.leftPoint} onClick={toleft}> {"<"} </button>
            <img className={clas.img} src={imgSrc} alt=""/>
            <button className={clas.rightPoint} onClick={toRight}> {">"} </button>
            <button  className={clas.exit} onClick={exitHandler}>X</button>
        </div>
    );
};

export default FullFile;