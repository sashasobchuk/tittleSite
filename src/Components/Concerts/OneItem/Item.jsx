import React from 'react';
import clas from'./Item.module.css'
import {useDispatch, useSelector} from "react-redux";
import {deleteCItem} from "../../../redux/concertPageReducer";

const Item = ({item}) => {
const dispatch=useDispatch()
    const  isAuth = useSelector(state => state.header.isAuth)
    const deleteInputHandler =()=>{
        dispatch(deleteCItem(item.id_concert))
    }
    return (
            <div className={clas.item} style={item.isDone === true ? {color:'#333300',backgroundColor:'transparent'}:{}}>
                <div>
                    <span className={clas.time}>{item.dt_add}</span>
                </div>
                <div>
                    <span className={clas.citi} >{item.citi}</span>
                </div>
                <div className={clas.status}>
                </div>
                <div className={clas.status2}>
                    <span>
                                             {item.status}
                    </span>
                </div>
                {isAuth &&<input type="button" className='item__delete' value='X' onClick={deleteInputHandler}/>}
            </div>
    );
};

export default Item;