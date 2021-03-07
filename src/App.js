import './App.css';
import React from "react";

import Foto from "./Components/Foto/Foto";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Video from "./Components/Video/Video";
import Concerts from "./Components/Concerts/Concerts";
import Contacts from "./Components/Contacts/Contacts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./redux/header.reducer";

const App = () => {
    const isAuth = useSelector(state=>state.header.isAuth)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(auth())
    },[isAuth])



    return <div className='all'>
        <div >
          <BrowserRouter>
              <div className='header'>
                  <Header />
              </div >
              <div className='body'>
                  <Route path="/Main" render={() => <Main />} />
                  <Route path="/Video" render={() => <Video />} />
                  <Route path="/Foto" render={() => <Foto />} />
                  <Route path="/Concerts" render={() => <Concerts />} />
                  <Route path="/Contacts" render={() => <Contacts />} />
              </div>

                  <div className='footer'>
                      <Footer />
                  </div>

          </BrowserRouter>
        </div>

    </div>
}

export default App
