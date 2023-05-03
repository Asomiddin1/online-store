import React, { useState } from 'react'

const Navigator = () => {
  const [modal, setModal] = useState(false)

  const showModal = (e) =>{
    if (e.target.className.includes( 'absolute top-0')) {
      setModal(false)
    }
  }


  return (
    <div className='flex w-full justify-around' >
      <div className='h-[10px] w-[30px]'>
        <div className='h-[5px] bg-black mt-1 rounded-[2px]'></div>
        <div className='h-[5px] bg-black mt-1 rounded-[2px]'></div>
        <div className='h-[5px] bg-black mt-1 rounded-[2px]' ></div>

      </div>
      <h3 className='text-[22px]'>Kategoriya</h3>
      <h3 className='text-[22px]'>Kontakt</h3>
      <h3 onClick={() => { setModal(true) }} className='text-[22px]'>Registratsiya</h3>
      <h3 className='text-[22px]'>Kirish</h3>
      <h3 className='text-[22px]'>Profil</h3>
      {/* popup */}
      {modal && <div onClick={showModal} className=" absolute top-0 left-0 flex justify-center items-center right-0 bottom-0 bg-[#000000c4] z-50 backdrop-blur">
        <div className="w-[300px] p-4 bg-white rounded shadow-md shadow-slate-600">
          <div className=" capitalize text-center text-3xl">sing up</div>
          <form>
            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="text" placeholder='enter your name' />
            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="email" placeholder='enter your email' />
            <input className=' py-3 border-b-2 w-full outline-none mb-1 border-slate-600' type="password" placeholder='enter your password' />
            <div className="flex justify-center">
              <button className=' px-5 py-2 rounded mt-2 bg-slate-800 text-white'>register</button>
            </div>
          </form>
        </div>
      </div>}
    </div>
  )
}

export default Navigator