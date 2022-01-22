import {login} from "../../services/userService";
import s from "./loginFormFormik.module.css"
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";

const LoginHooksForm = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (formData) => {
        console.log(formData);
        login(formData).then(response => console.log(response.data), err => alert(err))
    }
    return (<div>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <label>username</label>
                    <input
                        {...register("email")}
                        placeholder="neo@mail.com"
                        type="email"
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input  {...register("password")} placeholder="Kaput drakonis"/>
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
                    <button className={s.signButton}>Sign up</button>
                </NavLink>
            </div>
        </div>
    )
}

export default LoginHooksForm;