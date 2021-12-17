import {addCItemAPI, deleteCItemAPI, getConcertPageApi} from "../api/concertPageApi";

const SET_PAGE = "SET_PAGE"
const SET_NEW_EVENT = "SET_NEW_EVENT"


const defaultState = {
    items: [{
        id_concert: '1',
        dt_add: ' TIME:',
        status: 'INFORM:',
        citi: ' CITI:',
        text: 'text eee'
    },{
        id_concert: '11',
        dt_add: '2012-11-21',
        status: 'some inform message',
        citi: ' Lviv',
        text: 'text eee'
    },{
        id_concert: '1',
        dt_add: '2032-21-31',
        status: 'some other text about ...',
        citi: 'Ternopil',
        text: 'text eee'
    }]

}
const concertPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_PAGE :
            return {...state, items: action.Items}
        case SET_NEW_EVENT:
            return {...state,
                items:[...state.items,{
                    id_concert: action.id_concert,
                    dt_add: action.dt_add,
                    status: action.status,
                    citi: action.citi,
                    text: action.text,
                }]}
        default:
            return state
    }
}

export const setConcertPage = (Items) => ({type: SET_PAGE, Items})
export const setNewItem= (id_concert,dt_add,status,citi,text) => ({type: SET_NEW_EVENT,id_concert,dt_add,status,citi,text })


export const getConcertPage = () => async (dispatch) => {
    try {
        const response = await getConcertPageApi()
        dispatch(setConcertPage(response.data))
    } catch (e) {
        console.log('trouble in get back getConcertPage ', e)
    }
}

export const AddCItem = (date, citi, status, isDone) => async (dispatch) => {
    try {

           let response =  await addCItemAPI(date, citi, status, isDone)
            dispatch(setNewItem(response.data.id_item,response.data.dt_add,status,citi,status))
    } catch (e) {
        console.log('trouble in get back AddCItem ', e)
    }
}
export const deleteCItem = (_id) => async (dispatch) => {
    try {
        await deleteCItemAPI(_id)
        dispatch(getConcertPage())
    } catch (e) {
        console.log('trouble in get back deleteCItem ', e)
    }
}


export default concertPageReducer
