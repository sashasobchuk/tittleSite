import React from "react";
import clas from './footore.module.css'
import UperFooter from "./uperfooter";
import LoverFooter from "./LowerFooter";


const Footer = () => {
    return <div>
        <div className={clas.uperfoter}>
            <UperFooter/>
        </div>
        <div className={clas.loverfoter}>
            <LoverFooter/>
        </div>
    </div>
}

export default Footer