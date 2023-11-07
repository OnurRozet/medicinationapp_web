const { default: AllEndpoints } = require("./allEndpoints")
const { Post, Get, Delete } = require("./serviceCaller")

const MemberService={

   getAllMembers:()=>{
     return  Get(AllEndpoints.getAllMember)
   },

   addMember:(name,surname,gender,userId)=>{
    return Post(AllEndpoints.addMember,{
        name:name,
        surname:surname,
        gender:gender,
        userId:userId
    })
   },
   deleteMember:(memberId)=>{
return Delete(AllEndpoints.deleteMember.replace(":memberId", memberId));
   }


}

export default MemberService;