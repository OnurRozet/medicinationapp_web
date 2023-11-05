'use client'
import AllRoutes from '@/services/allRoutes'
import UserService from '../../services/userIdentityService'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'


const Register = () => {

    const [userName,setUserName]=useState("")
    const [name,setName]=useState("")
    const [surname,setSurname]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    const router=useRouter();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(password!==confirmPassword){
            return  toast.error('Passwords do not match')
        }
        userRegister()
    }

  const userRegister=async()=>{
 return await UserService.register(userName,name,surname,email,phone,password,confirmPassword)
    .then(()=>{
        toast.success("Kayıt olma işlemi başarılı",{
            position:"bottom-right",
        })
        router.push(AllRoutes.login);
    }).catch(()=>{
        toast.error("Kayıt olma işlemi gerçekleştirilememiştir.")
    })
   
  }


  return (
    <section>
    <div className="form-box">
        <div className="form-value">
            <form method='post' onSubmit={handleSubmit}> 
                <h2>Register</h2>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="text" required onChange={(e)=>setUserName(e.target.value)}/>
                    <label >Kullanıcı Adı</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="text" required onChange={(e)=>setName(e.target.value)}/>
                    <label >Adınız</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="text" required onChange={(e)=>setSurname(e.target.value)}/>
                    <label >Soyadınız</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="tel" required onChange={(e)=>setPhone(e.target.value)}/>
                    <label >Telefon Numaranız</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" required onChange={(e)=>setEmail(e.target.value)}/>
                    <label >Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required onChange={(e)=>setPassword(e.target.value)}/>
                    <label >Şifre</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" required onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <label>Şifre Tekrar</label>
                </div>
                <button>Register</button>
                <div className="register">
                    <p>Bir Hesabınız Var Mı? <Link href="/Login">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

export default Register
