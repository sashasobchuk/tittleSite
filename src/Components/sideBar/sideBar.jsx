import clas from './sideBar.module.css'


const SideBar = () => {


    return <>
        <div className={clas.sideBar}>
            <div className={clas.first}><span>  telephone : <a href="/">+380********* </a> </span></div>
            <div><span>email </span> :<a target="_blank" rel="noreferrer"  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"> <br/>example@gmail.com</a>
            </div> 
            <div><span>    facebook: <a target="_blank" rel="noreferrer"  href="https://www.facebook.com/profile.php?id=100009046814070"><br/>facebook.com</a></span>
            </div>
            <div><span>   youtube:<a target="_blank" rel="noreferrer"  href="https://www.youtube.com/"> <br/>youtoobe.com</a> </span>
            </div>
            <div><span>   instagram: <a target="_blank" rel="noreferrer" href="https://www.instagram.com/___0sasha0___/?hl=ru"><br/>instagram.com</a></span></div>

        </div>

    </>
}
export default SideBar