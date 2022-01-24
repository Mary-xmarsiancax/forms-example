const RegistrationFormik = () => {
    return (
        <div>
            <h1>Formik registration form</h1>
            <form>
                <div>
                    <input placeholder={"First name"}/>
                </div>
                <div>
                    <input placeholder={"Last name"}/>
                </div>
                <div>
                    <input placeholder={"E-mail address"}/>
                </div>
                <div>
                    <input placeholder={"Mobile number"}/>
                </div>
                <button>Registration</button>
            </form>
        </div>
    )
}
export default RegistrationFormik;