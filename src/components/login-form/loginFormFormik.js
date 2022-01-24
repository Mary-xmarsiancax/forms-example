import {Formik, Field, Form} from 'formik';
import {usersApi} from "../../services/userService";
import s from "./loginFormFormik.module.css"
import {NavLink, Redirect} from "react-router-dom";

const LoginFormFormik = () => {
    const onSubmit = (formData) => {
        usersApi.usersLogin(formData).then(response => {
            if (response.data.token) {
                 <Redirect  to={"/success"}/>
            }
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