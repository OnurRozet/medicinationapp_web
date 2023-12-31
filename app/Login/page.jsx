'use client'
import AllRoutes from '@/services/allRoutes';
import UserService from '@/services/userIdentityService';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import CookieUtil from '../utils/cookieUtils';
import AllEndpoints from '@/services/allEndpoints';

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const [rememberMe,setRememberMe]=useState(false);
    const [cookieUser,setCookieUser]=useState();

    const router =useRouter();


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email || !password){
            return toast.error("Email veya şifre hatalı")
        }
        userLogin();
    }


    const userLogin=async()=>{
        return await UserService.login(email,password,rememberMe)
            .then((res)=>{
                
                toast.success("Giriş işlemi başarılı",{
                    position: "bottom-right",
                })
                router.push(AllRoutes.member)
            }).catch(()=>{
                toast.error("Hatalı giriş bilgileri",{
                    position: "bottom-right",
                })
            })
    }   

  return (
    <section>
    <div className="form-box">
        <div className="form-value">
            <form method='post'onSubmit={handleSubmit} >
                <h2>Login</h2>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="">Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="">Password</label>
                </div>
                <div className="forget">
                    <label htmlFor=""><input type="checkbox" onChange={(e)=>setRememberMe(e.target.value)}/>Remember Me  <a href="#">Forget Password</a></label>
                  
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
