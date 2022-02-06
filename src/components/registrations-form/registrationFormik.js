import {Field, Form, Formik} from 'formik';
import {setAuthorizationHeader, usersApi} from "../../services/userService";
import {setRegistrationData} from "../../store/auth-reducer";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const RegistrationFormik = () => {
    let dispatch=useDispatch()
    let history = useHistory()

    const onSubmit = (data) => {
        usersApi.usersRegistration(data)
            .then(response => {
                let {username,id,token} = response.data
                dispatch(setRegistrationData(username,id))
                localStorage.setItem("token", token)
                setAuthorizationHeader(token)
                history.push("/success")
            })
    }

    return (
        <div>
            <h1>Formik registration form</h1>
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
                        <Field placeholder="any Input"
                               id="anyInput1"
                               name="username1"
                               type="text"/>{/*никуда не отправляю-просто для красоты*/}
                    </div>
                    <div>
                        <Field placeholder="any Input"
                               id="anyInput2"
                               name="username2"
                               type="text"/>{/*никуда не отправляю-просто для красоты*/}
                    </div>
                    <div>
                        <Field id="username"
                               name="username"
                               placeholder="Nickname"
                               type="text"
                        />
                    </div>
                    <div>
                        <Field placeholder="any Input"
                               id="anyInput3"
                               name="username3"
                               type="text"
                        />{/*никуда не отправляю-просто для красоты*/}

                    </div>
                    <div>
                        <Field id="password"
                               name="password"
                               placeholder="Password"
                               type="password"/>
                    </div>
                    <button type="submit">Registration</button>
                </Form>
            </Formik>

        </div>
    )
}
export default RegistrationFormik;