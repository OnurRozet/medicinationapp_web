'use client'
import UserService from '@/services/userIdentityService'
import Link from 'next/link'
import React, { useState } from 'react'


const Register = () => {

    const [userName,setUserName]=useState("")
    const [name,setName]=useState("")
    const [surname,setSurname]=useState("")
    const [phone,setPhone]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")

    const datas={
        userName:userName,
        name:name,
        surname:surname,
        phone:phone,
        email:email,
        password:password,
        confirmPassword:confirmPassword
    };

  const userRegister=async(name,surname,phone,email,password,confirmPassword,userName)=>{
    debugger
  const data= await UserService.register(userName,name,surname,phone,email,password,confirmPassword)
    console.log(data.data);
   
  }

// const userData=async(name,surname,phone,email,password,confirmPassword,userName)=>{
//     var data=await fetch("https://localhost:7020/api/Accounts/SignUp",{
//         method:"POST",
//       requestData:datas
//     })
//     var res=await data.json()

//     if(res.ok){
//         console.log(res);
//     }
// }


  return (
    <section>
    <div className="form-box">
        <div className="form-value">
            <form method='post'> 
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
                    <input type="phone" required onChange={(e)=>setPhone(e.target.value)}/>
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
                <button onClick={()=>userRegister(name,surname,phone,email,password,confirmPassword,userName)}>Register</button>
                <div className="register">
                    <p>Bir Hesabınız Var Mı? <Link href="/Login">Login</Link></p>
                </div>
            </form>
        </div>
    </div>
</section>
  )
}

// export const getServerSideProps=async()=>{
//    const data= UserService.register(userName,name,surname,phone,email,password,confirmPassword)
//     .then(res=>console.log(res.data))
//     .catch(err=>console.log(err))
//     .finally(()=>{
//         router.push(AllRoutes.login)
//     })
    
//     if(data){
//         return {
//             redirect:{
//                 destination: AllRoutes.login,
//             },
//             props:{
//                 data
//             }
            
//         }
//     }
    
            
    

 

// }

export default Register
