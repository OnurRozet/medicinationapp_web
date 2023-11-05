const { default: AllEndpoints } = require("./allEndpoints")
const { Post } = require("./serviceCaller")

const UserService={

    register:(username,name,surname,email,phoneNumber,password,confirmPassword)=>{
        return Post(AllEndpoints.register,{
            username:username,
            name:name,
            surname:surname,
            email:email,
            phone:phoneNumber,
            password:password,
            confirmPassword:confirmPassword
        })
    },

    login:(email,password,rememberMe)=>{
        return Post(AllEndpoints.login,{
            email:email,
            password:password,
            rememberMe:Boolean(rememberMe)
        })
    },

    forgotPassword:(email)=>{
        return Post(AllEndpoints.forgotPassword,{
            email:email
        })
    },

    resetPassword:(email,password,confirmPassword)=>{
        return Post(AllEndpoints.resetPassword,{
            email:email,
            password:password,
            confirmPassword:confirmPassword
        })
    }


}

export default UserService;