import AllEndpoints from "./allEndpoints";
import { Delete, Put } from "./serviceCaller";

const CategoryService={

    getAllCategories:()=>{
      return  Get(AllEndpoints.getAllCategory)
    },
 
    addCategory:(categoryName)=>{
     return Post(AllEndpoints.addCategory,{
        categoryName:categoryName,
       
     })
    },
    deleteMember:(categoryId)=>{
 return Delete(AllEndpoints.deleteCategory.replace(":categoryId", categoryId));
    },
    updateCategory:(categoryName)=>{
        return Put(AllEndpoints.updateCategory,{
            categoryName:categoryName
        })
    }
 
 
 }
 
 export default CategoryService;