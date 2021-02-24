import React from "react";
import  './Main.css'
import Galery from "./Galeryjsx";
import GaleryItem from "./GaleryItems";

const Main = () => {

    return <div>
        <div className="slider">
                <GaleryItem/>
                <GaleryItem/>
                <GaleryItem/>
                <GaleryItem/>

        </div>

    </div>
}

export default Main