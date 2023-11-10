'use client'
import React, { useState,useEffect } from 'react'
import CookieUtil from '../utils/cookieUtils';
import EnumUtil from '../utils/enumUtil';
import { useRouter } from 'next/navigation';
import AllRoutes from '@/services/allRoutes';
import MemberService from '@/services/memberService';
import { toast } from 'react-toastify';
import AddMember from '../components/addMember';


const Member = () => {

  const [cookieUser,setCookieUser]=useState();
  const [control, setControl] = useState(false);
  const [name,setName]=useState("");
  const [surname,setSurname]=useState("");
  const [gender,setGender]=useState("kadın");
  const [members,setMembers]=useState([])

  const router =useRouter();
  
  const savedUser=CookieUtil.getUser();

  useEffect(()=>{
   
    if(!savedUser){
      router.push(AllRoutes.register)
    }
    setCookieUser(savedUser);
    if(members.length===0 || control){
   
      setName("")
      setSurname("")
      fetchDataMembers()
      setControl(false)
    }
   
},[control])

 
 const fetchDataMembers=async()=>{
   
    await   MemberService.getAllMembers().then((res) => {
      
        if (res.data.data) {
          setMembers(res.data.data);
        } else {
          setMembers([]); // Veri null ise, boş bir dizi olarak ayarla
        }
      }) .catch((error) => {
        console.error("Veriler alınamadı:", error);
      });;
      
  }

  const handleGenderChange=(e)=>{
    setGender(e.target.value)
  }



  const addedMember=async()=>{
    return await MemberService.addMember(name,surname,EnumUtil.getGenderUtil(gender),savedUser.id)
        .then(()=>{
          setControl(true)
          toast.success("Aile üyesi başarılı bir şekilde eklenmiştir.")
         setMembers([...members,members])
        }).catch(()=>{
          toast.error("Aile üyesi eklenemedi.")
        })
  }

  return (
    <div className=" flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center gap-10 border rounded-xl w-auto h-auto  p-12 mt-20 shadow-2xl">
        <h2 className=" text-gray-700 text-5xl">
          İlaç Takip Sistemine Hoş Geldiniz.
        </h2>
        <h4 className=" text-2xl">
          Şimdi yapmanız gereken şey varsa eğer aşağıda aile üyelerinizi eklemek
        </h4>
        <div className="flex flex-col justify-center items-center gap-3">
          <input
            type="text"
            className="form-control border border-gray-600 rounded-lg p-1 w-[350px]"
            placeholder="Aile üyesinin adını giriniz..."
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <input
            type="text"
            className="form-control border border-gray-600 rounded-lg p-1 w-[350px]"
            placeholder="Aile üyesinin soyadını giriniz..."
            value={surname}
            onChange={(e)=>setSurname(e.target.value)}
          />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="kadın"
              id="kadın"
              value="kadın"
              checked={gender === "kadın"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="kadın">
              Kadın
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="erkek"
              id="erkek"
              value="erkek"
              checked={gender === "erkek"}
              onChange={handleGenderChange}
            />
            <label className="form-check-label" htmlFor="erkek">
              Erkek
            </label>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <button className='border bg-green-700 text-white hover:bg-green-500' onClick={addedMember}>Ekle</button>
          <button className="border bg-gray-800 text-white p-2">Devam Et</button>
        </div>
        {
          members && members.length>0 ?(
            <AddMember members={members}/>
          ):(<>Aile Üyesi Bulunamadı</>)
        } 
      </div>
    </div>
  );
}

// export async function getServerSideProps() {

//  let data= MemberService.getAllMembers().then((res) => {
//     if (res.data.data) {
//       setMembers(res.data.data);
//     } else {
//       setMembers([]); // Veri null ise, boş bir dizi olarak ayarla
//     }
//   }) .catch((error) => {
//     console.error("Veriler alınamadı:", error);
//   });;
 
  
//   return { props: { data } }
// }

export default Member
