import './App.module.css';
import LoginFormFormik from "./components/login-form/loginFormFormik";
import Header from "./components/header/header";
import RegistrationFormik from "./components/registrations-form/registrationFormik";
import {
    Route
} from "react-router-dom";
import RegistrationUpHooksForm from "./components/registrations-form/registrationUpHooksForm";
import LoginHooksForm from "./components/login-form/loginHooksForm";
import SuccessAuthPage from "./components/success-page/success-auth-page";

function App() {
    return (
        <div>
            <div><Header/></div>
            <Route path="/loginFormFormik" render={() => <LoginFormFormik/>}/>
            <Route path="/signUpFormik" render={() => <RegistrationFormik/>}/>
            <Route path="/loginHooksForm" render={() => <LoginHooksForm/>}/>
            <Route path="/signUpHooksForm" render={() => <RegistrationUpHooksForm/>}/>
            <Route path="/success" render={() => <SuccessAuthPage/>}/>
        </div>

    );
}

export default App;
