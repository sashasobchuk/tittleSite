import React from 'react';

import preloader from './../foto/loader.3gif.gif'
import clas from './preloader.module.css'

let Preloader = (props) => {
    return <div  className={clas.PreloaderContainer}>
        <img src={preloader}  alt='preloader'/>
    </div>
}

export default Preloader;





