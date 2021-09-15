import React from 'react';
import clas from './fotoSlide.module.css'
const FotoSlide = ({item}) => {
    const foto = item.image_Url_Name

    return (
        <>
            <img className={clas.img}  src={foto} alt={foto}/>
        </>
    );
};

export default FotoSlide;