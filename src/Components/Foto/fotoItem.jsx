import React, {useEffect, useState} from "react";
import image1 from '../../acces/forFoto/1.png'
import './foto.css'

const FotoItem = () => {
    const [input, changeInput] = useState('11')

    const ChangeInputHandler =  (e)=>{
        changeInput(e.currentTarget.value)

    }


    return (<>
        <div className='fotoItem'>
            <span className='fotoItem__tittle'> назва</span>
            <img className='fotoItem__imgDiv' width='100%' src={image1} alt="alt"/>

            <div className='fotoItem__comment'>
                <div><span> комент кот комент комент </span></div>
                <div><span> 2комент кот комент комент </span></div>
                <div className='fotoItem__comment__input '>
                    <input type="text" placeholder='comment' value={input} onChange={(e)=>ChangeInputHandler(e)}/>
                    <button> send</button>
                </div>
            </div>

        </div>

    </>)
}

export default FotoItem