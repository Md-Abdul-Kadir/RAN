import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import g from "../../../images/google.png";
import login from "../../../images/login.webp";

const Login = () => {
  /*
    const [ email, setemail ] = useState('');
    const [ pass, setpass ] = useState('');
    const { signInUsingGoogle, user,signinMailandPass } = useAuth();
   

    const handleEmailchange = e => {
         setemail(e.target.value);
        // console.log(email);
        
    }
    const handlePassChange = e => {
        setpass(e.target.value);
        // console.log(pass);
       
    }
    const handleLogin = e => {
        // console.log(email);
        // console.log(pass);
        signinMailandPass(email, pass);
        e.preventDefault();
    }*/
  return (
    <div className="d-flex text-center mt-5">
      <div className="w-50 my-5 d-flex mx-auto shadow-lg">
        <div className="w-50 d-flex">
          {" "}
          <img className="w-100 my-auto" src={login} alt="icon" />{" "}
        </div>
        <div className="w-50">
          <Container className="border-start p-5">
            <h4 className="pt-5 pb-3 text-theme-dark fw-bold border-theme w-75 mx-auto">
              LOG IN
            </h4>
            <div className="my-5 ">
              <form>
                <input
                  type="email"
                  className="form-control mx-auto"
                  placeholder="Email"
                />
                <br />
                <input
                  type="password"
                  className="form-control mx-auto"
                  placeholder="Password"
                />
                <br />
                <input
                  type="submit"
                  className="btn btn-bg-theme px-5 py-2 text-light"
                  value="Login"
                />
              </form>
              <p className="my-4 ">
                New to Research Alliance Network ?
                <Link to="/register"> Register</Link>
              </p>
              <button className="btn-light my-2 px-5 py-2 btn shadow mb-5">
                <img
                  src={g}
                  className="pe-2"
                  width="28px"
                  height="20px"
                  alt="Google icon"
                />
                Continue with Google
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Login;
