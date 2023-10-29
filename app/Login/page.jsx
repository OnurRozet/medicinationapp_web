import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <section>
    <div class="form-box">
        <div className="form-value">
            <form action="">
                <h2>Login</h2>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required/>
                    <label for="">Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required/>
                    <label for="">Password</label>
                </div>
                <div className="forget">
                    <label for=""><input type="checkbox"/>Remember Me  <a href="#">Forget Password</a></label>
                  
                </div>
                <button>Log in</button>
                <div className="register">
                    <p>Hesabınız Yok Mu ? <Link href="/Register">Register</Link></p>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default Login
