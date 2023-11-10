import React, {useState} from 'react'
import './LoginSignup.css'
import password_icon from '../Assets/password.png'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up")
    // const [action, setAction] = useState("Login")


  return (

      <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Username'/>
                </div>
            }
            
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email id'/>
            </div>
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:
        <div className="forget-password">Forget Password? <span>Click Here!</span></div>
        }
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=> {setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=> {setAction("Login")}}>Login</div>
        </div>
        <div className='line'>
            <div className='lines'></div>or
            <div className='lines'></div>
        </div>
        <div className='google'>
            <a href='#'>Sign in with Google</a>
        </div>
        <div className='google'>
            <a href='#'>Sign in with GitHub</a>
        </div>
      </div>
    
  )
}

export default LoginSignup
