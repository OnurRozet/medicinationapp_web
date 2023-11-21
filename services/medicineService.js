import AllEndpoints from "./allEndpoints";
import { Delete, Put,Get,Post } from "./serviceCaller";

const MedicineService = {
  getAllMedicines: () => {
    return Get(AllEndpoints.getAllmedicine);
  },

  addMedicine: (medicinename,description,expirationTime,usage,memberName,categoryname) => {
    return Post(AllEndpoints.addCategory, {
      medicinename,
      description,
      expirationTime,
      usage,
      memberName,
      categoryname,
    });
  },

//   deleteCategory: (categoryId) => {
//     return Delete(
//       AllEndpoints.deleteCategory.replace(":categoryId", categoryId)
//     );
//   },
//   updateCategory: (categoryName,categoryId) => {
//     return Put(AllEndpoints.updateCategory, {
//         id:categoryId,
//       categoryName: categoryName
//     });
//   },
};
 
 export default MedicineService;