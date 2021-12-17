import React, {useCallback, useEffect, useState} from "react";
import {NavLink, useHistory} from "react-router-dom";
import clas from './header.module.css'
import {useDispatch, useSelector} from "react-redux";
import Login from "../../acces/LoginComponent/Login";
import {changeVisibility, logAut, showLogin} from "../../redux/header.reducer";
import menuButton from './../../acces/foto/burgerMenu.png'

const Header = () => {
    const isAuth = useSelector(state => state.header.isAuth)
    const role = useSelector(state => state.header.role)
    const dispatch = useDispatch()

    const LoginHandler = () => {
        dispatch(showLogin())
    }

    function logAutHaandler() {
        dispatch(logAut())
    }

    const changeVisibilityHandler = () => {
       dispatch (changeVisibility())
    }
    let startPage = Number(  useHistory().location.pathname.split('=')[1])

    const [bigMenu,setBigMenu]=useState(true)

    const hideMenu=(e)=>{
        if(bigMenu){
            setBigMenu(false)
        }
    }
    const openMenu =useCallback( (e) => {
        e.stopPropagation()
        setBigMenu(true)
    },[bigMenu])

    useEffect(()=>{
        window.addEventListener('click',e=>{
            hideMenu()
        })
        return ()=>{
            window.removeEventListener('click',window)
        }
    },[])
    return <>

        <div className={clas.allHeader}>
            <div className={clas.leftheader}>
                <NavLink className={clas.lefName} activeClassName='active' to="/Main">site.com </NavLink>
            </div>
            <div className={`${clas.headerMain} ${!!bigMenu ? clas.active : clas.notActive}`}>
                <div><NavLink className={clas.link} activeClassName='active' to="/Main">Page </NavLink></div>
                <div><NavLink className={clas.link} activeClassName='active' to={`/foto/page=${startPage}`} >foto </NavLink></div>
                <div><NavLink className={clas.link} activeClassName='active'  to={`/video/page=${startPage}`}>video </NavLink></div>
                <div><NavLink className={clas.link} activeClassName='active' to="/Concerts">Events </NavLink></div>
                <div>< a  className={clas.link}  onClick={changeVisibilityHandler}>contacts</a></div>
            </div>
            <div onClick={e=>openMenu(e)} className={`${clas.headerMainButton} ${!!bigMenu ? clas.notActive :clas.active}`}>
                <img src={menuButton} alt=""/>
            </div>

            <div className={clas.rightHeader}>
                {isAuth === true
                    ? <span className={clas.rightName} onClick={logAutHaandler}>ADMINKA|{role}|AUT</span>
                    : <span className={clas.rightName} onClick={LoginHandler}>Admin </span>}
            </div>
        </div>

        <Login/>

    </>
}

export default Header