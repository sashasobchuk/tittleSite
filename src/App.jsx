import clas from './app.module.css';
import React from "react";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route, Redirect, HashRouter} from "react-router-dom";
import Concerts from "./Components/Concerts/Concerts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./redux/header.reducer";
import SideBar from "./Components/sideBar/sideBar";
import Preloader from "./acces/Preloader/Preloader";

const FIlE = React.lazy(() => import("./Components/File/File"))

const App = () => {
    /*  заисуємо Id користувача */
    !localStorage.getItem('userId') && localStorage.setItem('userId', Math.random().toString(17.2))

    const isAuth = useSelector(state => state.header.isAuth)
    const ContactsVisibility = useSelector(state => state.header.ContactsVisibility)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(auth())

    }, [isAuth,dispatch])

    return <div className={clas.all}>
                <HashRouter>
                    <div className={clas.header}>
                            <Header/>
                    </div>
                    <div className={clas.body}>
                        {ContactsVisibility &&
                        <div className={clas.sideFolder}>
                            <SideBar/>
                        </div>
                        }
                        <Route path="/Main" render={() => <Main/>}/>
                        <Route exact path='/' render={() => <Redirect to={'/Main'}/>}/>
                        <Route path="/Concerts" render={() => <Concerts/>}/>


                        <Route exact path="/foto/page=:page?" render={() => {
                            return <React.Suspense fallback={<Preloader />}>
                                <FIlE props={{fileType:'foto'}}/>
                            </React.Suspense>
                        }}/>
                        <Route  path="/video/page=:page?" render={() => {
                            return <React.Suspense fallback={<Preloader />}>
                                <FIlE props={{fileType: 'video'}}/>
                            </React.Suspense>
                        }}/>
                    </div>
                    <div className={clas.footer}>
                            <Footer/>
                    </div>

                </HashRouter>
    </div>
}

export default App
