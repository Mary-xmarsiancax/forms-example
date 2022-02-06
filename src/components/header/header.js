import s from "./header.module.css"
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Header = (props) => {
    return <div className={s.headerWrapper}>
       <span>
           <NavLink to="/loginFormFormik"> FORMIK </NavLink>
       </span>
        <span>
            <NavLink to="/loginHooksForm"> HOOKS FORM</NavLink>
        </span>
        {props.username &&
        <span>{props.username}</span>}
    </div>
}

const mapStateToProps = (state) => ({
    username: state.auth.username
})

export default connect(mapStateToProps,{})(Header);