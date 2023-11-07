const AllEndpoints= {
    login : "/api/Accounts/SignIn",
    register : "/api/Accounts/SignUp",
    forgotPassword:"/api/Accounts/ForgotPassword",
    resetPassword: "/api/Accounts/ResetPassword",
    getAllMember:"/api/Members/GetAll",
    getByIdMember:"/api/Members/GetById/:memberId",
    addMember:"/api/Members/AddMember",
    deleteMember:"/api/Members/DeleteMember?id=:memberId"
    
}
export default AllEndpoints;
  
  