import {useForm} from "react-hook-form";
import {setAuthorizationHeader, usersApi} from "../../services/userService";
import {setRegistrationData} from "../../store/auth-reducer";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";


const RegistrationHooksForm = () => {
   const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    let history = useHistory();

    const onSubmit = (data) => {
        usersApi.usersRegistration(data)
            .then(response => {
                let {id,username} = response.data
                let {token}=response.data
                dispatch(setRegistrationData(id,username))
                localStorage.setItem("token", token)
                setAuthorizationHeader(token)
                history.push("/success")
            }, err => alert(err))
    }

    return (<div>
            <h1>Hooks form registration</h1>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div>
                    <input placeholder={"any Input"}/>{/*никуда не отправляю-просто для красоты*/}
                </div>
                <div>
                    <input placeholder={"any Input"}/>{/*никуда не отправляю-просто для красоты*/}
                </div>
                <div>
                    <input {...register("username")} placeholder={"Nickname"}/>
                </div>
                <div>
                    <input placeholder={"any Input"}/>{/*никуда не отправляю-просто для красоты*/}
                </div>
                <div>
                    <input {...register("password")} placeholder={"password"} type="password"/>
                </div>
                <button type="submit" value="submit">Registration</button>
            </form>
        </div>
    )
}

export default RegistrationHooksForm;