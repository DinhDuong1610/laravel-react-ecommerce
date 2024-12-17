import { Link } from "react-router-dom";
import { useRef } from "react";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/Contextprovider";
function Legister() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const { setUser, setToken } = useStateContext();

    const submit = (e) => {
        e.preventDefault();
        const payload = {
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
        }
        
        axiosClient.post("register", payload).then(({ data }) => {
          setUser(data.user);
          setToken(data.token);
        }).catch((error) => {
          const response = error.response;
          if (response && response.status === 422) {
            console.log(response.data.errors);
          }
        })
    };

    return (
        <div className="login-signup-form animated fadeinDown">
            <form className="form" onSubmit={submit}>
                <h1 className="title">Create an account</h1>
                <input ref={nameRef} type="text" placeholder="Name" />
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" className="btn btn-block">
                    Register
                </button>
                <p className="message">
                    Already registered? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Legister;
