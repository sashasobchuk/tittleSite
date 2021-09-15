import { LoginApi} from "../api/api";

const CLOSE_LOGIN = 'CLOSE_LOGIN'
const SHOW_LOGIN = 'SHOW_LOGIN'
const IS_AUTH_TO_TRUE = 'IS_AUTH_TO_TRUE'
const IS_AUTH_TO_FALSE = 'IS_AUTH_TO_FALSE'
const CHANGE_ROLE = 'CHANGE_ROLE'
const CHANGE_VISIBILITY = 'CHANGE_VISIBILITY'

const defaultState = {
    isAuth: false,
    LoginDisplay: 'none' as 'none' | 'block' | 'flex',
    role:'GUEST',
    ContactsVisibility:false

}
type Type_defaultState = typeof defaultState

const HeaderReducer = (state: Type_defaultState = defaultState, action: any) => {
    switch (action.type) {
        case CLOSE_LOGIN:
            return {...state, LoginDisplay: 'none'}
        case SHOW_LOGIN:
            return {...state, LoginDisplay: 'flex'}
        case IS_AUTH_TO_TRUE:
            return {...state, isAuth: true}
        case IS_AUTH_TO_FALSE:
            return {...state, isAuth: false}
        case CHANGE_ROLE:
            return {...state, role: action.role}
        case CHANGE_VISIBILITY:
            return {...state, ContactsVisibility: !state.ContactsVisibility}
        default:
            return state
    }
}
export const closeLogin = () => ({type: CLOSE_LOGIN})
export const showLogin = () => ({type: SHOW_LOGIN})
export const isAuthToTrue = () => ({type: IS_AUTH_TO_TRUE})
export const isAuthToFalse = () => ({type: IS_AUTH_TO_FALSE})
export const setRole = (role:string) => ({type: CHANGE_ROLE,role})
// debugger
export const changeVisibility = () => ({type: CHANGE_VISIBILITY})

type liginValues = {
    email: string,
    password: string
}
export const login = (values:liginValues) => async (dispatch: any) => {

    try {

        const response = await LoginApi(values.email,values.password)
        // debugger
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('role', response.data.role)
            dispatch(isAuthToTrue())
            dispatch(setRole(response.data.role))
            dispatch(closeLogin())
        }
    } catch (e) {
        console.log('trouble in login', e)
    }

}

export const logAut = () => async (dispatch: any) => {

    try {
        localStorage.removeItem('token')
        localStorage.removeItem('role')
        dispatch(closeLogin())
        dispatch(isAuthToFalse())
    } catch (e) {
        console.log('trouble in login', e)
    }

}
export const auth = () => async (dispatch: any) => {

    try {
        let role  = localStorage.getItem('role')
               if(role !==null && role.length >0  ) {

                   dispatch(closeLogin())
                   dispatch(setRole(role))
                   dispatch(isAuthToTrue())
               }
    } catch (e) {
        console.log('trouble in login', e)
    }

}
// export const auth = () => async (dispatch: any) => {
//     try {
//          let token  = localStorage.getItem('token')
//         if(token !==null && token.length >0  ){
//             const response = await authApi()
//             if (response.status === 200) {
//                 localStorage.setItem('token', response.data.token)
//                 dispatch(isAuthToTrue())
//             }
//         }
//     } catch (e) {
//         localStorage.removeItem('token')
//         console.log('trouble in get auth', e)
//     }
//
// }

export default HeaderReducer
