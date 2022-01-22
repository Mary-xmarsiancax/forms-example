import s from "./header.module.css"
import {NavLink} from "react-router-dom";

const Header = () => {
    return <div className={s.headerWrapper}>
       <span>
           <NavLink to="/loginFormFormik"> FORMIK </NavLink>
       </span>
        <span>
            <NavLink to="/loginHooksForm"> HOOKS FORM</NavLink>
        </span>
    </div>
}
export default Header;