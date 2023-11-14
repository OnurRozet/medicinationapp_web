import AllEndpoints from "./allEndpoints";
import { Delete, Put,Get,Post } from "./serviceCaller";

const CategoryService = {
  getAllCategories: () => {
    return Get(AllEndpoints.getAllCategory);
  },

  addCategory: (categoryName) => {
    return Post(AllEndpoints.addCategory, {
      categoryName: categoryName,
    });
  },

  deleteCategory: (categoryId) => {
    return Delete(
      AllEndpoints.deleteCategory.replace(":categoryId", categoryId)
    );
  },
  updateCategory: (categoryName,categoryId) => {
    return Put(AllEndpoints.updateCategory, {
        id:categoryId,
      categoryName: categoryName
    });
  },
};
 
 export default CategoryService;