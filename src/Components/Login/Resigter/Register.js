import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
//import { createUserWithEmailAndPassword } from "firebase/auth";
import signImg from '../../../images/signup.webp'
import g from '../../../images/google.png'
import './Register.css'

const Register = () => {
  /*  const {signInUsingGoogle,auth,setuser,registerWithMailandPass } = useAuth();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleEmailchange = e => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePasschange = e => {
        setPassword(e.target.value);
        console.log(e.target.value);
    }
    const handleRegister = e => {
        console.log(email, password);
        registerWithMailandPass(email,password);
        e.terminate();
    }
*/
    return (
        <div className='text-center d-flex mt-5'>   
         <div className='d-flex my-5 w-50 shadow-lg mx-auto'>
            <div className='w-50 d-flex p-3'>
                <img src={signImg} className="w-100 my-auto" alt=""/>
            </div>
            <div className='w-50'>
            <Container className='border-start p-5' >
           <h4 className="pt-5 pb-3 text-theme-dark border-theme w-75 mx-auto fw-bold">SIGN-IN</h4>
            <div className="py-5 ">
                    <form >
                    <input type="text" className="form-control mx-auto" placeholder="Enter User Name" /><br />
                    <input type="email" className="form-control  mx-auto" placeholder="Email" /> <br/ >
                    <input type="password" className="form-control mx-auto" placeholder="Password" /><br />
                    
                    <input type="submit" className="btn btn-bg-theme text-light px-5 py-2 btn" value="Register" />
                        </form>
                    <p className="my-3 ">Already register ?<Link to="/login"> Log In</Link></p>
                    <button className="btn-light my-2 px-5 py-2 btn shadow"><img src={g} className="pe-2" width="28px" height="20px" alt="Google icon"/> Sign in with Google</button>
            </div>
            </Container>
            </div>
         </div>
        </div>
    );
};

export default Register;