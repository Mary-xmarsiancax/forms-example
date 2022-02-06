import {setAuthorizationHeader, usersApi} from "../../services/userService";
import s from "./loginFormFormik.module.css"
import {NavLink, useHistory,} from "react-router-dom";
import {useForm} from "react-hook-form";
import {setRegistrationData} from "../../store/auth-reducer";
import {useDispatch} from "react-redux";

const LoginHooksForm = () => {
    const dispatch = useDispatch()
    let history = useHistory();

    const {register, handleSubmit} = useForm()
    const onSubmit = (formData) => {
        usersApi.usersLogin(formData).then(response => {
            let {id, username, token} = response.data
            dispatch(setRegistrationData(id, username))
            localStorage.setItem("token", token)
            setAuthorizationHeader(token)
            history.push("/success")
        }, err => alert(err))
    }

    return (<div>
            <h1>Hooks form login</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label>Nickname</label>
                    <input
                        {...register("username")}
                        placeholder="neo@mail.com"
                        type="text"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input  {...register("password")} placeholder="Kaput drakonis" type="password"/>
                </div>
                <div>
                    <label htmlFor="rememberMe">remember me</label>
                    <input
                        id="rememberMe"
                        {...register("rememberMe")}
                        type="checkbox"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>

                <NavLink to="/signUpHooksForm">
                    <button className={s.signButton}>Registration</button>
                </NavLink>
            </div>
        </div>
    )
}

export default LoginHooksForm;