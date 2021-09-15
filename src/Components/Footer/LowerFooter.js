import React from 'react'
 import clas from './footore.module.css'
import insta from "../../acces/foto/loverfooter/instagram-new--v1.png";
import fasebook from "../../acces/foto/loverfooter/icons8-facebook-48.png";
import tick from "../../acces/foto/loverfooter/icons8-тик-так-48.png";
import youtoob from "../../acces/foto/loverfooter/icons8-youtube-play-48.png";




const LoverFooter =()=>{
    return <div>
        <div className={clas.LoverFooter}>
            <a href="https://www.instagram.com/___0sasha0___/" target="_blank" rel="noreferrer" title="instagram">
                <img src={insta} alt="instagram"/>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100009046814070" title="facebook" target="_blank"  rel="noreferrer">
                <img src={fasebook} alt="facebook"/>
            </a>
            <a href="/" title="ticktok" target="_blank"  rel="noreferrer">
                <img src={tick} alt="ticktok"/>
            </a>
            <a href="/" title="youtube" target="_blank"  rel="noreferrer">
                <img src={youtoob} alt="youtube"/>
            </a>
           </div>
    </div>
}
export default LoverFooter






