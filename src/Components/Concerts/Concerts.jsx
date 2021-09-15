import Item from "./OneItem/Item";
import clas from './Concerts.module.css'
import AddItem from "./Change/AddItem";
import {useDispatch, useSelector} from "react-redux";
import {getConcertPage} from "../../redux/concertPageReducer";
import {useEffect} from "react";


// debugger
const Concerts = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getConcertPage())
    },[dispatch])

    const isAuth = useSelector(state => state.header.isAuth)
    const items = useSelector(state => state.concertPage.items)

    return <>

        <div className={clas.AllItems}>
            {items.map((item) =>
                <Item  key={item.id_concert} item={item}/>
            )}
            {isAuth && <AddItem/>}

        </div>

    </>
}

export default Concerts







