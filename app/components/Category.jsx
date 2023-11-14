import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import DepartmentSubHeader from './DepartmentSubHeader';
import CategoryService from '@/services/categoryService';
import swalMessage from '../messages/swalMessage';
import { toast } from 'react-toastify';
import toastMessage from '../messages/toastMessage';


const Category = () => {
    const [category , setCategory]=useState([])
    const [inputValue,setInputValue]=useState("");
    const [control,setControl]=useState(false);

    useEffect(()=>{
      if(!category || control){
        getAllCategory();
        setControl(false)
      }
    })

    const deleteToCategory=async(id)=>{
      const result= await swalMessage.delete("Kategori");
      if(result){
           await CategoryService.deleteCategory(id).then((res)=>{
            toastMessage.success("Kategori","Delete")
            setControl(true)
        }).catch((error)=>{
            console.log(error)
        })
      }else{
        toastMessage.error("Kategori","Delete")
      }
     
    }

    const getAllCategory=async()=>{
      await CategoryService.getAllCategories()
        .then((res) => {
          setCategory(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }


    const addCategory=async()=>{
      await CategoryService.addCategory(category)
        .then(()=>{
          setCategory([...category,inputValue])
          toastMessage.success("Kategori","Add");
          setControl(true)
        }).catch(()=>{
          toastMessage.error("Kategori","Add")
      })
    }

    const columns = [
        {
          name: "Id",
          selector: (row) => row.id,
          sortable: true,
          
        },
        {
          name: "Kategori Adı",
          selector: (row) => row.categoryName,
          sortable: true,
        },
        {
          name: "İşlemler",
          cell: (row) => (
            <div className="d-flex">
              <button
                className="btn btn-danger me-2"
                onClick={() => deleteToCategory(row.id)}
              >
                Sil
              </button>
              <button
                className="btn btn-warning me-2"
                // onClick={() => updateToDepartment(row.id, row.name,userId)}
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal-${row.id}`}
                data-bs-whatever="@getbootstrap"
                onClick={() => setRolId(row.id)}
              >
                Güncelle
              </button>
              <RolModal
                id={row.id}
                name={row.name}
                inputValue={inputValue}
                setInputValue={setInputValue}
                updateToDepartment={updateToRol}
                user={userId}
              />
            </div>
            
          ),
        },
      ];


  return (
    <> {category && category.length>0  ? (

        <>
        <DataTable
          title="Rol Listesi"
          columns={columns}
          data={rol}
          fixedHeader
          fixedHeaderScrollHeight="550px"
          subHeader
          subHeaderComponent={<DepartmentSubHeader name="Kategori" inputValue={inputValue} setInputValue={setInputValue} addTo={addCategory}/>}
          paginationServer
          className='overflow-x-hidden' /><nav
            className="justify-content-end rounded-0"
            style={{ backgroundColor: "white" }}
          >
          </nav>
          </>
  
      ):<>Gösterilecek Veri Bulunamadı!</>} 
       
      </>
  )
}

export default Category
