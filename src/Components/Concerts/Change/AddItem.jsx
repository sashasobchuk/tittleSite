import React from 'react';
import clas from './AddItem.module.css'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {AddCItem} from "../../../redux/concertPageReducer";


const AddItem = () => {

    const [citiName, changeCitiName] = useState('ternopil')
    function changeCitiNameHandler(e) {changeCitiName(e.currentTarget.value)}
    const [status, changeStatus] = useState('')
    function changeStatusNameHandler(e) {changeStatus(e.currentTarget.value)}
    const [date, changeDate] = useState(new Date().toISOString())
    function changeDateHandler(e) {changeDate(e.currentTarget.value)}
    const [isDone, ] = useState(false)

    const dispatch = useDispatch()
    const addItemHandler = () => {
        // debugger
        dispatch(AddCItem(date,citiName,status,isDone))
    }
    return (
        <div className={clas.addItem}>

            <div className={clas.time}>
                <input type="date" value={date} onChange={(e) => changeDateHandler(e)}/>

            </div>
            <div>
                <input type="text" value={citiName} placeholder='Citi Name' onChange={(e) => {
                    changeCitiNameHandler(e)
                }}/>
            </div>
            <div>
                <input type="text" value={status} placeholder='status' onChange={(e) => {
                    changeStatusNameHandler(e)
                }}/>
            </div>

            <div>
            </div>
            <div>
                <input className={clas.Addbtn} type="button" value='__add__' onClick={()=>(addItemHandler())}/>
            </div>

        </div>
    );
};

export default AddItem;