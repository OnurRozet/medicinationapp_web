import Swal from "sweetalert2";
import toastMessage from "./toastMessage";

const swalMessage = {
  delete: async (name) => {
   return await Swal.fire({
      title: `${name} Silmek İstediğinize Emin Misiniz?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Hayır",
      confirmButtonText: "Evet",
    }).then((result)=>{
        if(result.isConfirmed){
            return true;
        }else{
            return false;
        }
    });
  },
};

export default swalMessage;
