import {Formik, Field, Form} from 'formik';
import {login} from "../../services/userService";
import s from "./loginFormFormik.module.css"
import {NavLink} from "react-router-dom";

const LoginFormFormik = () => {
    const onSubmit = (formData) => {
        login(formData).then(response => console.log(response.data), err => alert(err))
    }
    return (<div>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    rememberMe: false,
                    captcha: false
                }}
                onSubmit={onSubmit}
            >
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field
                            id="email"
                            name="email"
                            placeholder="neo@mail.com"
                            type="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field id="password" name="password" placeholder="Kaput drakonis"/>
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
            <button className={s.signButton}>Sign up</button>
        </NavLink>
            </div>
    </div>


    )
}

export default LoginFormFormik;