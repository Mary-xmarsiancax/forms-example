import {useForm} from "react-hook-form";
import {usersApi} from "../../services/userService";
import {Redirect} from "react-router-dom";

const RegistrationUpHooksForm = () => {
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => {
        usersApi.usersRegistration(data)
            .then(response => {
                if (response.data.token) {
                    <Redirect  to={"/success"}/>
                }
            }, err => alert(err))
    }

    return (<div>
            <h1>Hooks form registration</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <input placeholder={"First name"}/>{/*никуда не отправляю-просто для красоты*/}
                </div>
                <div>
                    <input placeholder={"Last name"}/>{/*никуда не отправляю-просто для красоты*/}
                </div>
                <div>
                    <input {...register("username")} placeholder={"Nickname"}/>
                </div>
                <div>
                    <input placeholder={"Mobile number"}/>{/*никуда не отправляю-просто для красоты*/}
                </div>
                <div>
                    <input {...register("password")} placeholder={"password"} type="password"/>
                </div>
                <button type="submit" value="submit">Registration</button>
            </form>
        </div>

    )
}
export default RegistrationUpHooksForm;