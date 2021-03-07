import React from "react";
import {NavLink} from "react-router-dom";
import clas from './header.module.css'
import {useDispatch, useSelector} from "react-redux";
import Login from "../../acces/LoginComponent/Login";
import { logAut, showLogin} from "../../redux/header.reducer";

const Header = () => {
    const isAuth = useSelector(state=>state.header.isAuth)
    const dispatch= useDispatch()

    const LoginHandler=()=>{
        dispatch(showLogin())
    }

    function logAutHaandler() {
        dispatch(logAut())
    }

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
            <div className={clas.rightHeader}> {isAuth ===true ?<span onClick={logAutHaandler} >LogAut</span> :<span onClick={LoginHandler}>Login</span> }</div>

            <Login/>
        </div>


    </div>
}

export default Header