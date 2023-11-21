'use client'
import MedicineService from '@/services/medicineService';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

const ListOfMedicine = () => {

    const [medicine , setMedicine]=useState([])
    const [control,setControl]=useState(false);

    useEffect(()=>{
        if(medicine || control){
            fetchDataMedicine();
          setControl(false)
        }
      },[control])

      const fetchDataMedicine=async()=>{
        await MedicineService.getAllMedicines()
          .then((res) => {
            setMedicine(res.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      console.log(medicine);


    const columns = [
        {
          name: "Id",
          selector: (row) => row.id,
          sortable: true,
          omit:true
        },
        {
          name: "İlaç Adı",
          selector: (row) => row.medicineName,
          sortable: true,
        },
        {
            name: "Son Kullanma Tarihi",
            selector: (row) => row.expirationTime,
            sortable: true,
          },
          {
            name: "Açıklama",
            selector: (row) => row.description,
            sortable: true,
          },
          {
            name: "Kullanım Koşulu",
            selector: (row) => row.usage,
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
                className="btn btn-warning me-2 w-[200px]"
                // onClick={() => updateToDepartment(row.id, row.name,userId)}
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal-${row.id}`}
                data-bs-whatever="@getbootstrap"
                onClick={() => setCategoryId(row.id)}
              >
                Güncelle
              </button>
              {/* <CategoryModal
                id={row.id}
                name={row.categoryName}
                inputValue={inputValue}
                setInputValue={setInputValue}
                updateToCategory={updateCategory}
              /> */}
            </div>
            
          ),
        },
      ];

  return (
    <> {medicine && medicine.length>0  ? (

        <>
        <DataTable
          title="İlaç Listesi"
          columns={columns}
          data={medicine}
          fixedHeader
          fixedHeaderScrollHeight="550px"
          subHeader
          //subHeaderComponent={<DepartmentSubHeader name="Kategori" inputValue={inputValue} setInputValue={setInputValue} addTo={addCategory}/>}
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

export default ListOfMedicine
