import React from "react";
import {NavLink} from "react-router-dom";
import clas from './header.module.css'
import logoFoto from './../../acces/foto/bird2.png'
import Contacts from "../Contacts/Contacts";

const Header = () => {
    return <div>

        <div className={clas.allHeader} >
            <div className={clas.leftheader}>
                <span>MySyte.com </span>
            </div>
            <div className={clas.headerMain}>
                <div><NavLink to="/Main"> Main page </NavLink></div>
                <div><NavLink to="/Foto">Foto </NavLink></div>
                <div><NavLink to="/Video">Video </NavLink></div>
                <div><NavLink to="/Concerts">Concerts </NavLink></div>
                <div><NavLink to="/Contacts">Contacts </NavLink></div>
            </div>
            <div className={clas.rightHeader}> language</div>


        </div>


    </div>
}

export default Header