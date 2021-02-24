import React, {useEffect, useState} from "react";
import  './foto.css'
import FotoItem from "./fotoItem";
import image1 from "../../acces/forFoto/1.png";

const Foto = () => {

    return <div >
        <div className='fotoPage'>
            <FotoItem/>
            <FotoItem/>
            <FotoItem/>
            <FotoItem/>
            <FotoItem/>
            <FotoItem/>
            <FotoItem/>
        </div>

    </div>
}
export default Foto