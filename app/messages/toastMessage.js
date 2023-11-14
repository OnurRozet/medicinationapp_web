import { toast } from "react-toastify";

const toastMessage={
    success:(name,opt)=>{  toast.success(`${name} ${opt === "Add" ? "ekleme" : opt === "Delete" ? "Silme" : "Güncelleme"} işlemi gerçekleştirilmiştir.`, {
        position: "bottom-right",
      })
    },
      error:(name,opt)=>{ toast.error(`${name} ${opt === "Add" ? "ekleme" : opt === "Delete" ? "Silme" : "Güncelleme"} işlemi gerçekleştirilememiştir.`, {
        position: "bottom-right",
      })
    },
    warning:(name)=>{
      toast.warning(
        `Lütfen ${name} Adı Giriniz !`,
        {
          position: "bottom-right",
        }
    )},
    definedDepartment:()=>{
      toast.warning(
        "Departman içerisinde tanımlı eğitim bulunduğu için silme işlemi gerçekleştirilemedi !",
        {
          position: "bottom-right",
        }
    )},
    definedPersonel:()=>{
      toast.warning(
        "Departman içerisinde tanımlı personel bulunduğu için silme işlemi gerçekleştirilemedi !",
        {
          position: "bottom-right",
        }
    )}
}

export default toastMessage;