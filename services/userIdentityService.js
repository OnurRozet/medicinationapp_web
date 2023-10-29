const { default: AllEndpoints } = require("./allEndpoints")
const { Post } = require("./serviceCaller")

const UserService={

    register:(username,name,surname,phoneNumber,email,password,confirmPassword)=>{
        return Post(AllEndpoints.register,{
            username:username,
            name:name,
            surname:surname,
            phoneNumber:phoneNumber,
            email:email,
            password:password,
            confirmPassword:confirmPassword
        })
    },

    login:(email,password,rememberMe)=>{
        return Post(AllEndpoints.login,{
            email:email,
            password:password,
            rememberMe:rememberMe
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