import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {closeLogin, login, } from "../../redux/header.reducer";
import clas from './Login.module.css'
import { Formik, Form, Field, ErrorMessage, } from 'formik';
const LoginForm=()=>{


    const dispatch = useDispatch()
    const LoginDisplay = useSelector(state => state.header.LoginDisplay)
    const EnterHandler = (values) => {
        dispatch(login(values))
    }
    const  validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if(!values.password){
            errors.password = 'Required';
        }
        return errors;
    }
    const closeLoginHandler = ()=>{
        dispatch(closeLogin('none'))
    }
    return(
        <div  className={clas.Login}  style={{display: LoginDisplay}}>
                <button className={clas.close} onClick={closeLoginHandler}>X</button>
                <Formik className={clas.Formik}
                    initialValues={{ email: 'sasha.sobchuk18@gmail.com', password: 'brama' }}
                    validate={validate}
                    onSubmit={(values, { setSubmitting }) => {
                        EnterHandler(values)
                        // setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2));
                        //     setSubmitting(false);
                        // }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className={clas.form}>
                            <label htmlFor='LoginName'>name</label>
                            <Field id='LoginName' type="text" name="email" />
                            <ErrorMessage name="email" component="div" />
                            <br/>
                            <label htmlFor='LoginPassword'>password</label>
                            <Field id='LoginPassword' type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            <br/>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
        </div>
    )
}

export default LoginForm;
