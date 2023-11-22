import AllEndpoints from "./allEndpoints";
import { Delete, Put,Get,Post } from "./serviceCaller";

const MedicineService = {
  getAllMedicines: () => {
    return Get(AllEndpoints.getAllmedicine);
  },

  addMedicine: (medicinename,description,expirationTime,usage,memberId,categoryName,categoryId) => {
    return Post(AllEndpoints.addMedicine, {
      medicinename,
      description,
      expirationTime,
      usage,
      memberId,
      categoryName,
      categoryId
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