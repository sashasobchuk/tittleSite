import React, {useState} from "react";
import foto1 from "../../acces/forFoto/2.jpg";
import './Main.css'


const GaleryItem = () => {
    return <div>
        <div className='slide'>
            <img src={foto1} alt="image01"/>
            <div>Описание #1</div>
        </div>
    </div>
}


export default GaleryItem



