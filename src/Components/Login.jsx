import React,{useState , useEffect} from 'react';
import validator from 'validator';
import './Login.css';
import LoginSucces from "./LoginSucces";
// eye
import { FiEyeOff } from "react-icons/fi";
// eye/
import { FiEye } from 'react-icons/fi';
import Forget from './Forget';

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const [isUserNameCorrect, setIsUserNameCorrect] = useState(false);
    const [isPasswordForget, setIsPasswordForget] = useState(false)
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    // username validation
    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        const email = e.target.value;
        setUserName(e.target.value)
        if (validator.isEmail(email)) {
            setIsUserNameCorrect(true);
        setEmailError('')
        } else {
        setEmailError('نام کاربری صحیح نیست :(');
        setIsUserNameCorrect(false);
        }
    }
    // submit validation
    const [submitValidation, setSubmitValidation] = useState(true);
    return(
        <div> {submitValidation  ?  
        <form className={`login`} onSubmit={()=>setSubmitValidation(false)}>
            <h1 style={{fontSize: "40px" , color:"white"}}>خوش آمدید</h1>
            <input
               type="email" 
               id="userEmail" 
               onChange={(e) => validateEmail(e)}
               placeholder={"نام کاربری"}
               required
               /><br/>
            <span style={{
                fontWeight: 'bold',
                fontSize:'10px',
                color: 'red',
                }}>{emailError}
            </span>
            <div className="pass-wrapper">
                <input
                    placeholder="رمز عبور"
                    name="password"
                    type={passwordShown ? "text" : "password"}
                    required
                    onChange = {() => setPassword()}
                />
                <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? <FiEye/> : <FiEyeOff/>}
                </i>
            </div>
            <button type={"button"} className={"forget"} onClick={()=>setIsPasswordForget(true)}>فراموش کردید؟</button><br/>
            <button type={'submit'} >ورود</button>
        </form> : <LoginSucces />}
            {isPasswordForget &&<Forget userName={userName}/>}
            {/* <Forget userName={userName}/> */}
            </div>
          
       
    );
};
export default Login;
