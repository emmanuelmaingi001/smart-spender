import React from 'react'
import Button from '../components/Button'

const Login = () => {
  return (
    <>
        <div className='login_container'>
            <div className="login_components">
                <h2>Login</h2>
                <div className="input_container">
                    <div className="input_box">
                        <input type="email" placeholder='Email Address' required />
                    </div>
                    <div className="input_box">
                        <input type="password" placeholder='Password' required />
                    </div>
                    <div className="btn_box">

                        <Button>Log In</Button>
                    </div>
                </div>
                <div className="signup_container">
                    <p>Don't have an account ? <span><a href="/signup">Sign Up</a></span></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login