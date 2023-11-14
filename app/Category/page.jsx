"use client"
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import DepartmentSubHeader from '../components/DepartmentSubHeader';
import CategoryService from '@/services/categoryService';
import swalMessage from '../messages/swalMessage';
import toastMessage from '../messages/toastMessage';
import CategoryModal from '../components/CategoryModal';


const Category = () => {
    const [category , setCategory]=useState([])
    const [inputValue,setInputValue]=useState("");
    const [control,setControl]=useState(false);
    const [categoryId,setCategoryId]=useState();

    useEffect(()=>{
      if(category || control){
        fetchDataCategory();
        setControl(false)
      }
    },[control])

    const deleteToCategory=async(id)=>{
      const result= await swalMessage.delete("Kategori");
      if(result){
           await CategoryService.deleteCategory(id).then(()=>{
            toastMessage.success("Kategori","Delete")
            setControl(true)
        }).catch((error)=>{
            console.log(error)
        })
      }else{
        toastMessage.error("Kategori","Delete")
      }
     
    }

    const fetchDataCategory=async()=>{
      await CategoryService.getAllCategories()
        .then((res) => {
          setCategory(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }


    const addCategory=async()=>{
      if(inputValue.trim() !==""){
         await CategoryService.addCategory(inputValue)
           .then(() => {
             setCategory([...category, inputValue]);
             toastMessage.success("Kategori", "Add");
             setInputValue("")
             setControl(true);
           })
           .catch(() => {
             toastMessage.error("Kategori", "Add");
           });
      }else{
        toastMessage.warning("Kategori")
      }
     
    }


    const updateCategory=async(name,id)=>{
      if(name.trim() !==""){
          await CategoryService.updateCategory(name,id)
        .then(()=>{
          setControl(true);
          toastMessage.success("Kategori","Update")
        }).catch(()=>{
          toastMessage.error("Kategori")
      })
      }else{
        toastMessage.warning("Kategori")
      }
    
    }

    const columns = [
        {
          name: "Id",
          selector: (row) => row.id,
          sortable: true,
          omit:true
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
                className="btn btn-warning me-2 w-[200px]"
                // onClick={() => updateToDepartment(row.id, row.name,userId)}
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal-${row.id}`}
                data-bs-whatever="@getbootstrap"
                onClick={() => setCategoryId(row.id)}
              >
                Güncelle
              </button>
              <CategoryModal
                id={row.id}
                name={row.categoryName}
                inputValue={inputValue}
                setInputValue={setInputValue}
                updateToCategory={updateCategory}
              />
            </div>
            
          ),
        },
      ];


  return (
    <> {category && category.length>0  ? (

        <>
        <DataTable
          title="Kategori Listesi"
          columns={columns}
          data={category}
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
