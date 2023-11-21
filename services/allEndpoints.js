const AllEndpoints= {
    login : "/api/Accounts/SignIn",
    register : "/api/Accounts/SignUp",
    forgotPassword:"/api/Accounts/ForgotPassword",
    resetPassword: "/api/Accounts/ResetPassword",
    getAllMember:"/api/Members/GetAll",
    getByIdMember:"/api/Members/GetById/:memberId",
    addMember:"/api/Members/AddMember",
    deleteMember:"/api/Members/DeleteMember?id=:memberId",
    getAllCategory:"/api/Categories",
    deleteCategory:"/api/Categories?id=:categoryId",
    addCategory:"/api/Categories",
    updateCategory:"/api/Categories",
    getAllmedicine:"/api/Medicines",
    deletemedicine:"/api/Medicines?id=:medicineId",
    addMedicine:"/api/Medicines",
    updateMedicine:"/api/Medicines",
    
}
export default AllEndpoints;
  
  