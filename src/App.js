import './App.module.css';
import LoginFormFormik from "./components/login-form/loginFormFormik";
import Header from "./components/header/header";
import RegistrationFormik from "./components/registrations-form/registrationFormik";
import {Route} from "react-router-dom";
import SuccessAuthPage from "./components/success-page/success-auth-page";
import LoginHooksFormContainer from "./components/login-form/loginHooksFormContainer";
import RegistrationHooksFormContainer from "./components/registrations-form/registrationHooksFormContainer";

function App() {
    return (
        <div>
            <div><Header/></div>
            <Route path="/loginFormFormik" render={() => <LoginFormFormik/>}/>
            <Route path="/signUpFormik" render={() => <RegistrationFormik/>}/>
            <Route path="/loginHooksForm" render={() => <LoginHooksFormContainer/>}/>
            <Route path="/signUpHooksForm" render={() => <RegistrationHooksFormContainer/>}/>
            <Route path="/success" render={() => <SuccessAuthPage/>}/>
        </div>

    );
}

export default App;
