import {Field, Form, Formik} from 'formik';
import {setAuthorizationHeader, usersApi} from "../../services/userService";
import s from "./loginFormFormik.module.css"
import {NavLink, useHistory} from "react-router-dom";
import {setRegistrationData} from "../../store/auth-reducer";
import {useDispatch} from "react-redux";

const LoginFormFormik = () => {
    let dispatch = useDispatch()
    let history = useHistory()

    const onSubmit = (formData) => {                //дублирую логику
        usersApi.usersLogin(formData)
            .then(response=>{
                let {id,username,token}=response.data
                dispatch(setRegistrationData(id,username))
                localStorage.setItem("token", token)
                setAuthorizationHeader(token)
                history.push("/success")
            }, err => alert(err))
    }

    return (<div>
            <h1>Formik login form</h1>
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    rememberMe: false,
                    captcha: false
                }}
                onSubmit={onSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="username">Nickname</label>
                        <Field
                            id="username"
                            name="username"
                            placeholder="neo@mail.com"
                            type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field id="password"
                               name="password"
                               placeholder="Kaput drakonis"
                               type="password"/>
                    </div>
                    <div>
                        <label htmlFor="rememberMe">remember me</label>
                        <Field
                            id="rememberMe"
                            name="rememberMe"
                            type="checkbox"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
            <div>

                <NavLink to="/signUpFormik">
                    <button className={s.signButton}>Registration</button>
                </NavLink>
            </div>
        </div>


    )
}

export default LoginFormFormik;