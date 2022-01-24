import {usersApi} from "../../services/userService";
import s from "./loginFormFormik.module.css"
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

const LoginHooksForm = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (formData) => {
        console.log(formData);
        usersApi.usersLogin(formData).then(response => console.log(response.data), err => alert(err))
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