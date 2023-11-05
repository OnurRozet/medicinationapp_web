import React from 'react'

const Member = () => {
  return (
    <div className=' flex justify-center items-center'>
      <div className=' flex flex-col justify-center items-center gap-20 border rounded-xl w-auto h-auto p-12 mt-20'>
        <h2 className=' text-gray-700 text-5xl'>İlaç Takip Sistemine Hoş Geldiniz.</h2>
        <h4 className=' text-2xl'>Şimdi yapmanız gereken şey varsa eğer aşağıda aile üyelerinizi eklemek</h4>
        <div className='flex flex-col justify-center items-center'>
            <input type="text" className='form-control' placeholder='Aile üyesinin adını giriniz...' />
            <input type="text" className='form-control' placeholder='Aile üyesinin soyadını giriniz...' />
            <input class="form-check-input mt-0" type="radio" value="Kadın" ></input>
            <input class="form-check-input mt-0" type="radio" value="Erkek" ></input>
        </div>
      </div>
    </div>
  )
}

export default Member
