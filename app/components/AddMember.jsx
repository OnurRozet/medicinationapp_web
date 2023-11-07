import React, { useEffect, useState } from 'react'
;
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Member from '../Member/page';
import MemberService from '@/services/memberService';
import { toast } from 'react-toastify';

const AddMember = ({members,fetchDataMembers}) => {
    const [data,setData]=useState([members])
    const [control,setControl]=useState(false)

    const deleteMembers=async(id)=>{
        await MemberService.deleteMember(id).then(()=>{
toast.success("Aile üyesi başarılı bir şekilde silinmiştir.")
setControl(true)
        }).catch(()=>{
            toast.error("Aile üyesi silinememiştir.")
        })
    }

    const fetchDataMembers=async()=>{
   
        await   MemberService.getAllMembers().then((res) => {
            if (res.data.data) {
              setData(res.data.data);
            } else {
              setData([]); // Veri null ise, boş bir dizi olarak ayarla
            }
          }) .catch((error) => {
            console.error("Veriler alınamadı:", error);
          });;
          
      }
    

    useEffect(()=>{
        if(control){

            fetchDataMembers();
        }
setControl(false)
    },[control])
    

  return (

    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Aksiyon</th>
          </tr>
        </thead>
        <tbody>
          {members && members.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td className='flex flex-row gap-2'>
                <Button variant="danger" size='sm' onClick={()=>deleteMembers(item.id)}>Sil</Button>
               
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AddMember
