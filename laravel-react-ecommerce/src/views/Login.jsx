import { Link } from "react-router-dom";
function Login() {
    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-signup-form animated fadeinDown">
            <form className="form" onSubmit={submit}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="btn btn-block">
                    Login
                </button>
                <p className="message">
                    Not registered?{" "}
                    <Link to="/register">Create an account</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;
