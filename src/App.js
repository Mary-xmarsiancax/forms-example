import './App.module.css';
import LoginFormFormik from "./components/loginForm/loginFormFormik";
import Header from "./components/header/header";
import SignUpFormik from "./components/registrationsForm/signUpFormik";
import {
    Route
} from "react-router-dom";
import SignUpHooksForm from "./components/registrationsForm/signUpHooksForm";
import LoginHooksForm from "./components/loginForm/loginHooksForm";

function App() {
    return (
        <div>
            <div><Header/></div>
            <Route path="/loginFormFormik" render={() => <LoginFormFormik/>}/>
            <Route path="/signUpFormik" render={() => <SignUpFormik/>}/>
            <Route path="/loginHooksForm" render={() => <LoginHooksForm/>}/>
            <Route path="/signUpHooksForm" render={() => <SignUpHooksForm/>}/>
        </div>

    );
}

export default App;
